import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Camera, Loader2, Upload, User } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { AppRole } from "../backend";
import { loadLocalProfile, saveLocalProfile } from "../hooks/useLocalProfile";

const INTERESTS = ["Maths", "Physics", "Programming", "Electronics", "Biology"];

function getDashboardPath(role?: AppRole): string {
  if (role === AppRole.teacher) return "/dashboard/teacher";
  return "/dashboard/student";
}

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

  const dashboardPath = getDashboardPath(profile?.role);

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
    // reset so same file can be re-selected
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
      saveLocalProfile({
        ...profile,
        displayName: displayName.trim(),
        interests,
        profileImageUrl,
      });
      toast.success("Profile saved!");
      // Redirect to dashboard after saving
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

          {/* Avatar preview */}
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

          {/* Camera error */}
          {cameraError && (
            <p
              className="text-sm text-destructive text-center"
              data-ocid="profile.error_state"
            >
              {cameraError}
            </p>
          )}

          {/* Camera section */}
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

          {/* Role / class info — read-only */}
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

        {/* Footer spacing */}
        <div className="h-8" />
      </main>
    </div>
  );
}
