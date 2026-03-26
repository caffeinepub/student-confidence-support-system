import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "@tanstack/react-router";
import { BookOpen, GraduationCap, Loader2, Users } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { AppRole } from "../backend";
import { useSubmitProfile } from "../hooks/useQueries";

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const [role, setRole] = useState<AppRole | null>(null);
  const submitProfile = useSubmitProfile();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!displayName.trim() || !role) {
      toast.error("Please fill in your name and select a role");
      return;
    }
    try {
      await submitProfile.mutateAsync({
        displayName: displayName.trim(),
        role,
      });
      toast.success("Profile created! Welcome aboard 🎉");
      if (role === AppRole.teacher) {
        navigate({ to: "/dashboard/teacher" });
      } else {
        navigate({ to: "/dashboard/student" });
      }
    } catch {
      toast.error("Failed to create profile. Please try again.");
    }
  };

  return (
    <div className="min-h-screen hero-gradient flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-4">
            <GraduationCap className="w-9 h-9 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            Welcome to SCSS
          </h1>
          <p className="text-muted-foreground mt-2">
            Let's set up your profile to get started
          </p>
        </div>

        <Card className="warm-card-shadow-lg border-border">
          <CardHeader>
            <CardTitle className="text-lg">Create Your Profile</CardTitle>
            <CardDescription>
              Choose your role and enter your display name
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="displayName">Display Name</Label>
                <Input
                  id="displayName"
                  placeholder="Enter your name"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="border-border"
                  data-ocid="onboarding.input"
                />
              </div>

              <div className="space-y-2">
                <Label>I am a...</Label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setRole(AppRole.student)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      role === AppRole.student
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                    data-ocid="onboarding.student.toggle"
                  >
                    <BookOpen className="w-6 h-6 text-primary mb-2" />
                    <div className="font-semibold text-foreground text-sm">
                      Student
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Submit doubts &amp; build confidence
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole(AppRole.teacher)}
                    className={`p-4 rounded-xl border-2 transition-all text-left ${
                      role === AppRole.teacher
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                    data-ocid="onboarding.teacher.toggle"
                  >
                    <Users className="w-6 h-6 text-primary mb-2" />
                    <div className="font-semibold text-foreground text-sm">
                      Teacher
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Review &amp; answer student doubts
                    </div>
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-semibold"
                disabled={
                  submitProfile.isPending || !displayName.trim() || !role
                }
                data-ocid="onboarding.submit_button"
              >
                {submitProfile.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating Profile...
                  </>
                ) : (
                  "Continue to Dashboard"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
