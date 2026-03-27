import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowLeft,
  Camera,
  Loader2,
  RefreshCw,
  Upload,
  User,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { AppRole } from "../backend";
import { loadLocalProfile, saveLocalProfile } from "../hooks/useLocalProfile";
import { saveUserToFirestore } from "../lib/useFirestoreUsers";
import { isTeacherInitialized, switchRole } from "../lib/useRoleSwitch";

const INTERESTS = ["Maths", "Physics", "Programming", "Electronics", "Biology"];

function getDashboardPath(role?: AppRole): string {
  if (role === AppRole.teacher) return "/dashboard/teacher";
  return "/dashboard/student";
}

type SwitchStep = "idle" | "confirm" | "teacher-code";

export default function ProfilePage() {
  const navigate = useNavigate();
  const profile = loadLocalProfile();

  const [displayName, setDisplayName] = useState(profile?.displayName ?? "");
  const [interests, setInterests] = useState<string[]>(
    profile?.interests ?? [],
  );
  const [profileImageUrl, setProfileImageUrl] = useState<string | undefined>(
    profile?.profileImageUrl,
  );

  // Camera state
  const [cameraOpen, setCameraOpen] = useState(false);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [captured, setCaptured] = useState<string | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [saving, setSaving] = useState(false);

  // Role switch state
  const [switchStep, setSwitchStep] = useState<SwitchStep>("idle");
  const [teacherCode, setTeacherCode] = useState("");
  const [teacherCodeError, setTeacherCodeError] = useState("");
  const [switching, setSwitching] = useState(false);
  // Whether this user has already been a teacher before (requires code on re-switch)
  const [teacherAlreadyInitialized, setTeacherAlreadyInitialized] = useState(
    profile?.isTeacherInitialized ?? false,
  );

  const dashboardPath = getDashboardPath(profile?.role);
  const currentRole = profile?.role ?? AppRole.student;
  const targetRole: "teacher" | "student" =
    currentRole === AppRole.teacher ? "student" : "teacher";
  const targetLabel = targetRole === "teacher" ? "Teacher" : "Student";

  const goBack = () => {
    navigate({ to: dashboardPath });
  };

  // Start camera
  const startCamera = useCallback(async () => {
    setCameraError(null);
    setCaptured(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } },
      });
      setCameraStream(stream);
      setCameraOpen(true);
    } catch {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        setCameraStream(stream);
        setCameraOpen(true);
      } catch (err) {
        setCameraError("Camera access denied or unavailable.");
        console.error(err);
      }
    }
  }, []);

  useEffect(() => {
    if (cameraStream && videoRef.current) {
      videoRef.current.srcObject = cameraStream;
    }
  }, [cameraStream]);

  const stopCamera = useCallback(() => {
    for (const t of cameraStream?.getTracks() ?? []) {
      t.stop();
    }
    setCameraStream(null);
    setCameraOpen(false);
    setCaptured(null);
  }, [cameraStream]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      for (const t of cameraStream?.getTracks() ?? []) {
        t.stop();
      }
    };
  }, [cameraStream]);

  const capturePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d")?.drawImage(video, 0, 0);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
    setCaptured(dataUrl);
  };

  const useCapturedPhoto = () => {
    if (captured) {
      setProfileImageUrl(captured);
      stopCamera();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      setProfileImageUrl(dataUrl);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((i) => i !== interest)
        : [...prev, interest],
    );
  };

  const handleSave = async () => {
    if (!profile) return;
    if (!displayName.trim()) {
      toast.error("Name cannot be empty");
      return;
    }
    setSaving(true);
    try {
      const saved = saveLocalProfile({
        ...profile,
        displayName: displayName.trim(),
        interests,
        profileImageUrl,
      });
      try {
        await saveUserToFirestore(
          saved.userId,
          saved.displayName,
          saved.role as string,
        );
      } catch {
        /* ignore */
      }
      toast.success("Profile saved!");
      setTimeout(() => {
        navigate({ to: dashboardPath });
      }, 800);
    } catch (err) {
      console.error(err);
      toast.error("Failed to save profile");
    } finally {
      setSaving(false);
    }
  };

  // Role switch handlers
  const handleSwitchClick = async () => {
    if (targetRole === "teacher") {
      // Check if this user has previously been a teacher (needs code on re-switch)
      const alreadyInit =
        teacherAlreadyInitialized ||
        (profile ? await isTeacherInitialized(profile.userId) : false);
      setTeacherAlreadyInitialized(alreadyInit);

      if (alreadyInit) {
        // Already been a teacher before — show confirm then optional code
        setSwitchStep("confirm");
      } else {
        // First time switching to teacher — skip code, go straight to confirm
        setSwitchStep("confirm");
      }
    } else {
      // Switching to student — just confirm
      setSwitchStep("confirm");
    }
  };

  const handleConfirmContinue = () => {
    if (targetRole === "teacher" && teacherAlreadyInitialized) {
      // Already been a teacher — ask for code as security check
      setTeacherCode("");
      setTeacherCodeError("");
      setSwitchStep("teacher-code");
    } else {
      // First time teacher OR switching to student — allow directly
      performSwitch(targetRole, undefined);
    }
  };

  const handleCancelSwitch = () => {
    setSwitchStep("idle");
    setTeacherCode("");
    setTeacherCodeError("");
  };

  const handleTeacherCodeSubmit = async () => {
    await performSwitch("teacher", teacherCode);
  };

  const performSwitch = async (
    role: "student" | "teacher",
    code: string | undefined,
  ) => {
    if (!profile) return;
    setSwitching(true);
    setTeacherCodeError("");
    try {
      const result = await switchRole(profile.userId, role, code);
      if (!result.success) {
        setTeacherCodeError(result.error ?? "Switch failed.");
        setSwitching(false);
        return;
      }
      // If this was first-time teacher switch, mark initialized
      if (role === "teacher" && !teacherAlreadyInitialized) {
        setTeacherAlreadyInitialized(true);
      }
      setSwitchStep("idle");
      toast.success(
        `Role switched to ${role === "teacher" ? "Teacher" : "Student"}!`,
      );
      setTimeout(() => {
        navigate({
          to: role === "teacher" ? "/dashboard/teacher" : "/dashboard/student",
        });
      }, 600);
    } catch (err) {
      console.error(err);
      setTeacherCodeError("Something went wrong. Please try again.");
    } finally {
      setSwitching(false);
    }
  };

  if (!profile) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="glass-card rounded-2xl p-8 text-center warm-shadow">
          <p className="text-muted-foreground mb-4">No profile found.</p>
          <Button onClick={() => navigate({ to: "/onboarding" })}>
            Create Profile
          </Button>
        </div>
      </div>
    );
  }

  const isStudent = profile.role === AppRole.student;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="glass-nav sticky top-0 z-40 px-4 sm:px-6 py-3">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <button
            type="button"
            onClick={goBack}
            className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover:bg-muted/60 transition-colors"
            data-ocid="profile.link"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <h1 className="font-display font-bold text-foreground text-base">
            Edit Profile
          </h1>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Profile Image Card */}
        <div className="glass-card rounded-2xl p-6 warm-shadow border-white/40 space-y-5">
          <h2 className="font-display font-semibold text-base text-foreground">
            Profile Photo
          </h2>

          <div className="flex flex-col items-center gap-4">
            <div
              className="w-28 h-28 rounded-full overflow-hidden shadow-lg border-4 border-white/60"
              data-ocid="profile.card"
            >
              {profileImageUrl ? (
                <img
                  src={profileImageUrl}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full gradient-primary flex items-center justify-center">
                  <User className="w-12 h-12 text-white/80" />
                </div>
              )}
            </div>

            <div className="flex gap-3 flex-wrap justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={startCamera}
                className="min-h-[44px] gap-2"
                data-ocid="profile.upload_button"
              >
                <Camera className="w-4 h-4" />
                Take Photo
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                className="min-h-[44px] gap-2"
                data-ocid="profile.secondary_button"
              >
                <Upload className="w-4 h-4" />
                Upload Photo
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
            </div>
          </div>

          {cameraError && (
            <p
              className="text-sm text-destructive text-center"
              data-ocid="profile.error_state"
            >
              {cameraError}
            </p>
          )}

          {cameraOpen && (
            <div className="space-y-3 border border-border rounded-xl p-4 bg-muted/30">
              <canvas ref={canvasRef} className="hidden" />

              {!captured ? (
                <>
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    className="w-full rounded-xl aspect-video object-cover bg-black"
                  />
                  <div className="flex gap-3">
                    <Button
                      onClick={capturePhoto}
                      className="flex-1 gradient-primary text-white border-0 min-h-[44px]"
                      data-ocid="profile.primary_button"
                    >
                      📸 Capture
                    </Button>
                    <Button
                      variant="outline"
                      onClick={stopCamera}
                      className="min-h-[44px]"
                      data-ocid="profile.cancel_button"
                    >
                      Cancel
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <img
                    src={captured}
                    alt="Captured"
                    className="w-full rounded-xl aspect-video object-cover"
                  />
                  <div className="flex gap-3">
                    <Button
                      onClick={useCapturedPhoto}
                      className="flex-1 gradient-primary text-white border-0 min-h-[44px]"
                      data-ocid="profile.confirm_button"
                    >
                      Use This Photo
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setCaptured(null)}
                      className="min-h-[44px]"
                      data-ocid="profile.secondary_button"
                    >
                      Retake
                    </Button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Name Card */}
        <div className="glass-card rounded-2xl p-6 warm-shadow border-white/40 space-y-4">
          <h2 className="font-display font-semibold text-base text-foreground">
            Your Name
          </h2>
          <div className="space-y-2">
            <Label
              htmlFor="displayName"
              className="text-sm text-muted-foreground"
            >
              Display Name
            </Label>
            <Input
              id="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="h-11 rounded-xl bg-white/60"
              placeholder="Enter your name"
              data-ocid="profile.input"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge className="bg-primary/10 text-primary border-primary/20 capitalize">
              {profile.role}
            </Badge>
            {(profile.userClass || profile.userBranch) && (
              <Badge variant="outline" className="text-muted-foreground">
                {profile.userClass ?? profile.userBranch}
              </Badge>
            )}
          </div>
        </div>

        {/* Interests (students only) */}
        {isStudent && (
          <div className="glass-card rounded-2xl p-6 warm-shadow border-white/40 space-y-4">
            <h2 className="font-display font-semibold text-base text-foreground">
              Your Interests
            </h2>
            <p className="text-sm text-muted-foreground">
              Select subjects you enjoy learning about.
            </p>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((interest) => {
                const selected = interests.includes(interest);
                return (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => toggleInterest(interest)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 min-h-[44px] ${
                      selected
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-muted/60 text-muted-foreground border-border hover:bg-muted"
                    }`}
                    data-ocid="profile.toggle"
                  >
                    {interest}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Switch Role Card */}
        <div className="glass-card rounded-2xl p-6 warm-shadow space-y-4">
          <div className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4 text-primary" />
            <h2 className="font-display font-semibold text-base text-foreground">
              Switch Role
            </h2>
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm text-muted-foreground">Current role</p>
              <Badge
                className={`capitalize ${
                  currentRole === AppRole.teacher
                    ? "bg-amber-100 text-amber-800 border-amber-200"
                    : "bg-blue-100 text-blue-800 border-blue-200"
                }`}
              >
                {currentRole === AppRole.teacher
                  ? "👨‍🏫 Teacher"
                  : "🎓 Student"}
              </Badge>
            </div>
            <Button
              variant="outline"
              onClick={handleSwitchClick}
              className="gap-2 min-h-[44px] border-primary/30 text-primary hover:bg-primary/5"
              data-ocid="profile.toggle"
            >
              <RefreshCw className="w-4 h-4" />
              Switch to {targetLabel}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            {teacherAlreadyInitialized && targetRole === "teacher"
              ? "Re-switching to Teacher requires your teacher code for security."
              : "Switching roles won't delete any of your data. Your doubts and activity will be preserved."}
          </p>
        </div>

        {/* Save button */}
        <Button
          onClick={handleSave}
          disabled={saving}
          className="w-full gradient-primary text-white border-0 shadow-primary font-semibold h-12 rounded-xl"
          data-ocid="profile.save_button"
        >
          {saving ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Saving…
            </>
          ) : (
            "Save Profile"
          )}
        </Button>

        <div className="h-8" />
      </main>

      {/* Step 1: Confirmation Dialog */}
      <Dialog
        open={switchStep === "confirm"}
        onOpenChange={(open) => {
          if (!open) handleCancelSwitch();
        }}
      >
        <DialogContent
          className="sm:max-w-md rounded-2xl"
          data-ocid="role_switch.dialog"
        >
          <DialogHeader>
            <DialogTitle>Switch Role</DialogTitle>
            <DialogDescription asChild>
              <div className="space-y-2 pt-1">
                <p>
                  Are you sure you want to switch to{" "}
                  <strong>{targetLabel}</strong> mode?
                </p>
                {targetRole === "teacher" && !teacherAlreadyInitialized && (
                  <p className="text-xs text-green-700 bg-green-50 rounded-lg px-3 py-2 border border-green-200">
                    First time switching to Teacher — no code required!
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  Your existing data will be preserved. You'll be redirected to
                  the appropriate dashboard.
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-2 sm:gap-2">
            <Button
              variant="outline"
              onClick={handleCancelSwitch}
              className="flex-1"
              data-ocid="role_switch.cancel_button"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirmContinue}
              disabled={switching}
              className="flex-1 gradient-primary text-white border-0"
              data-ocid="role_switch.confirm_button"
            >
              {switching ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Switching…
                </>
              ) : (
                "Continue"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Step 2: Teacher Code Dialog (only for re-switching) */}
      <Dialog
        open={switchStep === "teacher-code"}
        onOpenChange={(open) => {
          if (!open) handleCancelSwitch();
        }}
      >
        <DialogContent
          className="sm:max-w-md rounded-2xl"
          data-ocid="role_switch.dialog"
        >
          <DialogHeader>
            <DialogTitle>Enter Teacher Code</DialogTitle>
            <DialogDescription>
              You've been a teacher before. Enter your teacher code to switch
              back to Teacher mode.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3 py-2">
            <div className="space-y-2">
              <Label htmlFor="teacher-code" className="text-sm">
                Teacher Code
              </Label>
              <Input
                id="teacher-code"
                type="password"
                placeholder="Enter teacher code"
                value={teacherCode}
                onChange={(e) => {
                  setTeacherCode(e.target.value);
                  setTeacherCodeError("");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleTeacherCodeSubmit();
                }}
                className="h-11 rounded-xl"
                data-ocid="role_switch.input"
              />
            </div>
            {teacherCodeError && (
              <p
                className="text-sm text-destructive"
                data-ocid="role_switch.error_state"
              >
                {teacherCodeError}
              </p>
            )}
          </div>

          <DialogFooter className="flex gap-2 sm:gap-2">
            <Button
              variant="outline"
              onClick={handleCancelSwitch}
              disabled={switching}
              className="flex-1"
              data-ocid="role_switch.cancel_button"
            >
              Cancel
            </Button>
            <Button
              onClick={handleTeacherCodeSubmit}
              disabled={switching || !teacherCode.trim()}
              className="flex-1 gradient-primary text-white border-0"
              data-ocid="role_switch.confirm_button"
            >
              {switching ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Switching…
                </>
              ) : (
                "Confirm Switch"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
