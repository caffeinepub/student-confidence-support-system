import { u as useNavigate, r as reactExports, j as jsxRuntimeExports, a as ue } from "./index-CmwXAydB.js";
import { B as Badge } from "./badge-DRh5RkDC.js";
import { c as createLucideIcon, B as Button } from "./button-O5XFWfCG.js";
import { I as Input } from "./input-CuiEwsXR.js";
import { L as Label } from "./label-l_c_RiPZ.js";
import { A as AppRole } from "./backend-EtwvbCVR.js";
import { l as loadLocalProfile, s as saveLocalProfile } from "./useLocalProfile-ECFr9UYt.js";
import { A as ArrowLeft } from "./arrow-left-D2EikqIB.js";
import { C as Camera, U as Upload } from "./upload-BwnsaYrU.js";
import { L as LoaderCircle } from "./loader-circle-GRAoClRe.js";
import "./index-iBPqhqw9.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const INTERESTS = ["Maths", "Physics", "Programming", "Electronics", "Biology"];
function ProfilePage() {
  const navigate = useNavigate();
  const profile = loadLocalProfile();
  const [displayName, setDisplayName] = reactExports.useState((profile == null ? void 0 : profile.displayName) ?? "");
  const [interests, setInterests] = reactExports.useState(
    (profile == null ? void 0 : profile.interests) ?? []
  );
  const [profileImageUrl, setProfileImageUrl] = reactExports.useState(
    profile == null ? void 0 : profile.profileImageUrl
  );
  const [cameraOpen, setCameraOpen] = reactExports.useState(false);
  const [cameraStream, setCameraStream] = reactExports.useState(null);
  const [captured, setCaptured] = reactExports.useState(null);
  const [cameraError, setCameraError] = reactExports.useState(null);
  const videoRef = reactExports.useRef(null);
  const canvasRef = reactExports.useRef(null);
  const fileInputRef = reactExports.useRef(null);
  const [saving, setSaving] = reactExports.useState(false);
  const startCamera = reactExports.useCallback(async () => {
    setCameraError(null);
    setCaptured(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } }
      });
      setCameraStream(stream);
      setCameraOpen(true);
    } catch {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true
        });
        setCameraStream(stream);
        setCameraOpen(true);
      } catch (err) {
        setCameraError("Camera access denied or unavailable.");
        console.error(err);
      }
    }
  }, []);
  reactExports.useEffect(() => {
    if (cameraStream && videoRef.current) {
      videoRef.current.srcObject = cameraStream;
    }
  }, [cameraStream]);
  const stopCamera = reactExports.useCallback(() => {
    for (const t of (cameraStream == null ? void 0 : cameraStream.getTracks()) ?? []) {
      t.stop();
    }
    setCameraStream(null);
    setCameraOpen(false);
    setCaptured(null);
  }, [cameraStream]);
  reactExports.useEffect(() => {
    return () => {
      for (const t of (cameraStream == null ? void 0 : cameraStream.getTracks()) ?? []) {
        t.stop();
      }
    };
  }, [cameraStream]);
  const capturePhoto = () => {
    var _a;
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    (_a = canvas.getContext("2d")) == null ? void 0 : _a.drawImage(video, 0, 0);
    const dataUrl = canvas.toDataURL("image/jpeg", 0.85);
    setCaptured(dataUrl);
  };
  const useCapturedPhoto = () => {
    if (captured) {
      setProfileImageUrl(captured);
      stopCamera();
    }
  };
  const handleFileUpload = (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      var _a2;
      const dataUrl = (_a2 = ev.target) == null ? void 0 : _a2.result;
      setProfileImageUrl(dataUrl);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };
  const toggleInterest = (interest) => {
    setInterests(
      (prev) => prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };
  const handleSave = async () => {
    if (!profile) return;
    if (!displayName.trim()) {
      ue.error("Name cannot be empty");
      return;
    }
    setSaving(true);
    try {
      saveLocalProfile({
        ...profile,
        displayName: displayName.trim(),
        interests,
        profileImageUrl
      });
      ue.success("Profile saved!");
    } catch (err) {
      console.error(err);
      ue.error("Failed to save profile");
    } finally {
      setSaving(false);
    }
  };
  if (!profile) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen bg-background flex items-center justify-center p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-8 text-center warm-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "No profile found." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => navigate({ to: "/onboarding" }), children: "Create Profile" })
    ] }) });
  }
  const isStudent = profile.role === AppRole.student;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "glass-nav sticky top-0 z-40 px-4 sm:px-6 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => navigate({ to: -1 }),
          className: "w-9 h-9 rounded-full glass-card flex items-center justify-center hover:bg-muted/60 transition-colors",
          "data-ocid": "profile.link",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display font-bold text-foreground text-base", children: "Edit Profile" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-2xl mx-auto px-4 sm:px-6 py-8 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6 warm-shadow border-white/40 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-base text-foreground", children: "Profile Photo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-28 h-28 rounded-full overflow-hidden shadow-lg border-4 border-white/60",
              "data-ocid": "profile.card",
              children: profileImageUrl ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: profileImageUrl,
                  alt: "Profile",
                  className: "w-full h-full object-cover"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full gradient-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-12 h-12 text-white/80" }) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 flex-wrap justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: startCamera,
                className: "min-h-[44px] gap-2",
                "data-ocid": "profile.upload_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-4 h-4" }),
                  "Take Photo"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                variant: "outline",
                size: "sm",
                onClick: () => {
                  var _a;
                  return (_a = fileInputRef.current) == null ? void 0 : _a.click();
                },
                className: "min-h-[44px] gap-2",
                "data-ocid": "profile.secondary_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-4 h-4" }),
                  "Upload Photo"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                ref: fileInputRef,
                type: "file",
                accept: "image/*",
                className: "hidden",
                onChange: handleFileUpload
              }
            )
          ] })
        ] }),
        cameraError && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "p",
          {
            className: "text-sm text-destructive text-center",
            "data-ocid": "profile.error_state",
            children: cameraError
          }
        ),
        cameraOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 border border-border rounded-xl p-4 bg-muted/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("canvas", { ref: canvasRef, className: "hidden" }),
          !captured ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "video",
              {
                ref: videoRef,
                autoPlay: true,
                playsInline: true,
                muted: true,
                className: "w-full rounded-xl aspect-video object-cover bg-black"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: capturePhoto,
                  className: "flex-1 gradient-primary text-white border-0 min-h-[44px]",
                  "data-ocid": "profile.primary_button",
                  children: "📸 Capture"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  onClick: stopCamera,
                  className: "min-h-[44px]",
                  "data-ocid": "profile.cancel_button",
                  children: "Cancel"
                }
              )
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: captured,
                alt: "Captured",
                className: "w-full rounded-xl aspect-video object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  onClick: useCapturedPhoto,
                  className: "flex-1 gradient-primary text-white border-0 min-h-[44px]",
                  "data-ocid": "profile.confirm_button",
                  children: "Use This Photo"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Button,
                {
                  variant: "outline",
                  onClick: () => setCaptured(null),
                  className: "min-h-[44px]",
                  "data-ocid": "profile.secondary_button",
                  children: "Retake"
                }
              )
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6 warm-shadow border-white/40 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-base text-foreground", children: "Your Name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Label,
            {
              htmlFor: "displayName",
              className: "text-sm text-muted-foreground",
              children: "Display Name"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "displayName",
              value: displayName,
              onChange: (e) => setDisplayName(e.target.value),
              className: "h-11 rounded-xl bg-white/60",
              placeholder: "Enter your name",
              "data-ocid": "profile.input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary/10 text-primary border-primary/20 capitalize", children: profile.role }),
          (profile.userClass || profile.userBranch) && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-muted-foreground", children: profile.userClass ?? profile.userBranch })
        ] })
      ] }),
      isStudent && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-card rounded-2xl p-6 warm-shadow border-white/40 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-base text-foreground", children: "Your Interests" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Select subjects you enjoy learning about." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: INTERESTS.map((interest) => {
          const selected = interests.includes(interest);
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: () => toggleInterest(interest),
              className: `px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 min-h-[44px] ${selected ? "bg-primary text-primary-foreground border-primary shadow-sm" : "bg-muted/60 text-muted-foreground border-border hover:bg-muted"}`,
              "data-ocid": "profile.toggle",
              children: interest
            },
            interest
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Button,
        {
          onClick: handleSave,
          disabled: saving,
          className: "w-full gradient-primary text-white border-0 shadow-primary font-semibold h-12 rounded-xl",
          "data-ocid": "profile.save_button",
          children: saving ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "w-4 h-4 mr-2 animate-spin" }),
            "Saving…"
          ] }) : "Save Profile"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8" })
    ] })
  ] });
}
export {
  ProfilePage as default
};
