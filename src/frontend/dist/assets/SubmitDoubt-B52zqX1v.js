import { r as reactExports, j as jsxRuntimeExports, u as useNavigate, e as ue } from "./index-CldB4VhC.js";
import { B as Button } from "./button-C1ZNB9_6.js";
import { C as Card, a as CardContent } from "./card-Cj01kCqB.js";
import { I as Input } from "./input-UZdbOdM0.js";
import { L as Label } from "./label-BT050t8r.js";
import { u as usePrevious, e as useSize, S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem } from "./select-CGCyThmy.js";
import { u as useControllableState, c as composeEventHandlers } from "./index-DFyADs0y.js";
import { u as useComposedRefs, c as cn } from "./index-C4t1-qkZ.js";
import { c as createContextScope, P as Primitive } from "./index-DKJKj2ns.js";
import { T as Textarea } from "./textarea-ByzpR6Ul.js";
import { H as Header } from "./Header-cC0Ghhom.js";
import { r as readUserProfile, S as SCHOOL_CLASSES, C as COLLEGE_BRANCH_NAMES, a as SCHOOL_SUBJECTS, b as COLLEGE_BRANCHES } from "./branchData-BCGrsxEw.js";
import { b as useSubmitDoubt } from "./useQueries-dUQBg3Kv.js";
import { G as GraduationCap } from "./graduation-cap-DtJOVheI.js";
import { C as CircleCheck } from "./circle-check--ySA4rvx.js";
import { S as Shield } from "./shield-CJ-vI8mG.js";
import { C as Camera } from "./camera-DlkpD315.js";
import { U as Upload, E as Eye } from "./upload-JluNFrW4.js";
import { X } from "./x-CSi_P993.js";
import { L as LoaderCircle } from "./loader-circle-BrnUcdQL.js";
import { S as Send } from "./send-BThgIPGk.js";
import { A as ArrowLeft } from "./arrow-left-BhP1fN0g.js";
import { A as ArrowRight } from "./arrow-right-BntJuo5X.js";
import "./index-IXOTxK3N.js";
import "./index-CGCexLlI.js";
import "./Combination-BkPRaxQx.js";
import "./index-BJkV86h2.js";
import "./chevron-down-ORxMCOhv.js";
import "./chevron-up-BITjm4yt.js";
import "./useNotifications-Cmhqk2Rk.js";
import "./useFirestoreDoubts-B4DL_0iA.js";
var SWITCH_NAME = "Switch";
var [createSwitchContext] = createContextScope(SWITCH_NAME);
var [SwitchProvider, useSwitchContext] = createSwitchContext(SWITCH_NAME);
var Switch$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeSwitch,
      name,
      checked: checkedProp,
      defaultChecked,
      required,
      disabled,
      value = "on",
      onCheckedChange,
      form,
      ...switchProps
    } = props;
    const [button, setButton] = reactExports.useState(null);
    const composedRefs = useComposedRefs(forwardedRef, (node) => setButton(node));
    const hasConsumerStoppedPropagationRef = reactExports.useRef(false);
    const isFormControl = button ? form || !!button.closest("form") : true;
    const [checked, setChecked] = useControllableState({
      prop: checkedProp,
      defaultProp: defaultChecked ?? false,
      onChange: onCheckedChange,
      caller: SWITCH_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(SwitchProvider, { scope: __scopeSwitch, checked, disabled, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Primitive.button,
        {
          type: "button",
          role: "switch",
          "aria-checked": checked,
          "aria-required": required,
          "data-state": getState(checked),
          "data-disabled": disabled ? "" : void 0,
          disabled,
          value,
          ...switchProps,
          ref: composedRefs,
          onClick: composeEventHandlers(props.onClick, (event) => {
            setChecked((prevChecked) => !prevChecked);
            if (isFormControl) {
              hasConsumerStoppedPropagationRef.current = event.isPropagationStopped();
              if (!hasConsumerStoppedPropagationRef.current) event.stopPropagation();
            }
          })
        }
      ),
      isFormControl && /* @__PURE__ */ jsxRuntimeExports.jsx(
        SwitchBubbleInput,
        {
          control: button,
          bubbles: !hasConsumerStoppedPropagationRef.current,
          name,
          value,
          checked,
          required,
          disabled,
          form,
          style: { transform: "translateX(-100%)" }
        }
      )
    ] });
  }
);
Switch$1.displayName = SWITCH_NAME;
var THUMB_NAME = "SwitchThumb";
var SwitchThumb = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeSwitch, ...thumbProps } = props;
    const context = useSwitchContext(THUMB_NAME, __scopeSwitch);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.span,
      {
        "data-state": getState(context.checked),
        "data-disabled": context.disabled ? "" : void 0,
        ...thumbProps,
        ref: forwardedRef
      }
    );
  }
);
SwitchThumb.displayName = THUMB_NAME;
var BUBBLE_INPUT_NAME = "SwitchBubbleInput";
var SwitchBubbleInput = reactExports.forwardRef(
  ({
    __scopeSwitch,
    control,
    checked,
    bubbles = true,
    ...props
  }, forwardedRef) => {
    const ref = reactExports.useRef(null);
    const composedRefs = useComposedRefs(ref, forwardedRef);
    const prevChecked = usePrevious(checked);
    const controlSize = useSize(control);
    reactExports.useEffect(() => {
      const input = ref.current;
      if (!input) return;
      const inputProto = window.HTMLInputElement.prototype;
      const descriptor = Object.getOwnPropertyDescriptor(
        inputProto,
        "checked"
      );
      const setChecked = descriptor.set;
      if (prevChecked !== checked && setChecked) {
        const event = new Event("click", { bubbles });
        setChecked.call(input, checked);
        input.dispatchEvent(event);
      }
    }, [prevChecked, checked, bubbles]);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type: "checkbox",
        "aria-hidden": true,
        defaultChecked: checked,
        ...props,
        tabIndex: -1,
        ref: composedRefs,
        style: {
          ...props.style,
          ...controlSize,
          position: "absolute",
          pointerEvents: "none",
          opacity: 0,
          margin: 0
        }
      }
    );
  }
);
SwitchBubbleInput.displayName = BUBBLE_INPUT_NAME;
function getState(checked) {
  return checked ? "checked" : "unchecked";
}
var Root = Switch$1;
var Thumb = SwitchThumb;
function Switch({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Thumb,
        {
          "data-slot": "switch-thumb",
          className: cn(
            "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
          )
        }
      )
    }
  );
}
const STEPS = [
  { n: 1, title: "Describe Your Doubt", icon: "📝" },
  { n: 2, title: "Add Attachments", icon: "📎" },
  { n: 3, title: "Review & Submit", icon: "🚀" }
];
function SubmitDoubt() {
  const navigate = useNavigate();
  const submitDoubtMutation = useSubmitDoubt();
  const [step, setStep] = reactExports.useState(1);
  const [submitting, setSubmitting] = reactExports.useState(false);
  const profile = readUserProfile();
  const [form, setForm] = reactExports.useState({
    branch: profile.userBranch ?? profile.userClass ?? "",
    subject: "",
    title: "",
    description: "",
    anonymous: false,
    images: []
  });
  const [dragOver, setDragOver] = reactExports.useState(false);
  const fileInputRef = reactExports.useRef(null);
  const cameraInputRef = reactExports.useRef(null);
  const updateForm = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));
  const getSubjectsForBranch = (branchOrClass) => {
    if (!branchOrClass) {
      if (profile.userType === "school") return SCHOOL_SUBJECTS;
      if (profile.userType === "college" && profile.userBranch) {
        return COLLEGE_BRANCHES[profile.userBranch] ?? SCHOOL_SUBJECTS;
      }
      return SCHOOL_SUBJECTS;
    }
    if (COLLEGE_BRANCHES[branchOrClass]) return COLLEGE_BRANCHES[branchOrClass];
    return SCHOOL_SUBJECTS;
  };
  const currentSubjects = getSubjectsForBranch(form.branch);
  const isSchoolMode = profile.userType === "school" || SCHOOL_CLASSES.includes(form.branch);
  const isCollegeMode = profile.userType === "college" || COLLEGE_BRANCH_NAMES.includes(form.branch);
  const handleBranchChange = (val) => {
    const subs = getSubjectsForBranch(val);
    setForm((prev) => ({
      ...prev,
      branch: val,
      subject: subs.includes(prev.subject) ? prev.subject : ""
    }));
  };
  const handleFiles = (files) => {
    if (!files) return;
    const newImgs = Array.from(files).filter((f) => f.type.startsWith("image/")).slice(0, 4 - form.images.length).map((f) => ({ url: URL.createObjectURL(f), name: f.name, file: f }));
    setForm((prev) => ({ ...prev, images: [...prev.images, ...newImgs] }));
  };
  const removeImage = (idx) => setForm((prev) => ({
    ...prev,
    images: prev.images.filter((_, i) => i !== idx)
  }));
  const canProceed1 = form.subject.length > 0 && form.title.trim().length > 5 && form.description.trim().length > 10;
  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const fullText = `[${form.branch} | ${form.subject}]

${form.title}

${form.description}`;
      await submitDoubtMutation.mutateAsync({
        text: fullText,
        isAnonymous: form.anonymous
      });
      ue.success(
        "Doubt submitted successfully! 🎉 A teacher will answer soon."
      );
      setForm({
        branch: profile.userBranch ?? profile.userClass ?? "",
        subject: "",
        title: "",
        description: "",
        anonymous: false,
        images: []
      });
      setStep(1);
    } catch (err) {
      console.error("Doubt submission failed:", err);
      ue.error(
        "Submission failed. Please check your connection and try again."
      );
    } finally {
      setSubmitting(false);
    }
  };
  const branchLabel = isCollegeMode ? "Branch" : isSchoolMode ? "Class" : "Class / Branch";
  const branchPlaceholder = isCollegeMode ? "Select branch" : isSchoolMode ? "Select class" : "Select class or branch";
  const branchItems = isCollegeMode ? COLLEGE_BRANCH_NAMES : isSchoolMode ? SCHOOL_CLASSES : [...SCHOOL_CLASSES, ...COLLEGE_BRANCH_NAMES];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "max-w-2xl mx-auto px-4 sm:px-6 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 shadow-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "w-7 h-7 text-white" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-bold text-foreground mb-2", children: "Submit a Doubt" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Your questions deserve answers. Ask freely — anonymously if you prefer." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${step > s.n ? "gradient-primary text-white shadow-primary" : step === s.n ? "gradient-primary text-white shadow-primary" : "bg-muted text-muted-foreground"}`,
              children: step > s.n ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5" }) : s.n
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `text-xs mt-1.5 font-medium hidden sm:block ${step === s.n ? "text-primary" : step > s.n ? "text-green-600" : "text-muted-foreground"}`,
              children: s.title
            }
          )
        ] }),
        i < STEPS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `h-0.5 flex-1 mx-2 rounded transition-all duration-500 ${step > s.n ? "bg-primary" : "bg-muted"}`
          }
        )
      ] }, s.n)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "glass-card warm-shadow-lg border-white/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 sm:p-8", children: [
        step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground", children: "📝 Describe Your Doubt" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: branchLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.branch,
                onValueChange: handleBranchChange,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "border-border",
                      "data-ocid": "submit.select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: branchPlaceholder })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: branchItems.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: b, children: b }, b)) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Subject" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Select,
              {
                value: form.subject,
                onValueChange: (v) => updateForm("subject", v),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    SelectTrigger,
                    {
                      className: "border-border",
                      "data-ocid": "submit.select",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select a subject" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: currentSubjects.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: s, children: s }, s)) })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Doubt Title" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                placeholder: "e.g. Why does integration by parts work?",
                value: form.title,
                onChange: (e) => updateForm("title", e.target.value),
                className: "border-border",
                "data-ocid": "submit.input"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Describe in Detail" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Textarea,
              {
                placeholder: "Explain what you understand so far and what's confusing you. The more detail, the better the answer!",
                value: form.description,
                onChange: (e) => updateForm("description", e.target.value),
                className: "border-border min-h-[120px] resize-none",
                "data-ocid": "submit.textarea"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground text-right", children: [
              form.description.length,
              " chars"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 p-4 rounded-xl bg-muted/50 border border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-5 h-5 text-primary mt-0.5 flex-shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Submit Anonymously" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Your name won't be shown to teachers or classmates" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Switch,
                  {
                    checked: form.anonymous,
                    onCheckedChange: (v) => updateForm("anonymous", v),
                    "data-ocid": "submit.switch"
                  }
                )
              ] }),
              form.anonymous && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-xs text-green-600 font-medium flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-3.5 h-3.5" }),
                ` You'll appear as "Anonymous Student"`
              ] })
            ] })
          ] })
        ] }),
        step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 animate-slide-in-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl font-bold text-foreground", children: [
            "📎 Add Attachments",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-muted-foreground", children: "(optional)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: fileInputRef,
              type: "file",
              accept: "image/*",
              multiple: true,
              className: "hidden",
              onChange: (e) => handleFiles(e.target.files),
              "data-ocid": "submit.upload_button"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: cameraInputRef,
              type: "file",
              accept: "image/*",
              capture: "environment",
              className: "hidden",
              onChange: (e) => handleFiles(e.target.files),
              "data-ocid": "submit.camera_input"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  var _a;
                  return (_a = cameraInputRef.current) == null ? void 0 : _a.click();
                },
                className: "flex flex-col items-center justify-center gap-2.5 p-6 rounded-2xl gradient-primary text-white font-semibold shadow-primary hover:opacity-90 transition-opacity",
                "data-ocid": "submit.camera_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "w-8 h-8" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Take Photo" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs opacity-80 font-normal", children: "Opens camera directly" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: () => {
                  var _a;
                  return (_a = fileInputRef.current) == null ? void 0 : _a.click();
                },
                className: "flex flex-col items-center justify-center gap-2.5 p-6 rounded-2xl border-2 border-border bg-muted/30 text-foreground font-semibold hover:border-primary/50 hover:bg-muted/60 transition-colors",
                "data-ocid": "submit.upload_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-8 h-8 text-muted-foreground" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Upload Image" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-normal", children: "From gallery or files" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: `border border-dashed rounded-xl p-4 text-center transition-colors cursor-pointer w-full ${dragOver ? "border-primary bg-primary/5" : "border-border hover:border-primary/40"}`,
              onDragOver: (e) => {
                e.preventDefault();
                setDragOver(true);
              },
              onDragLeave: () => setDragOver(false),
              onDrop: (e) => {
                e.preventDefault();
                setDragOver(false);
                handleFiles(e.dataTransfer.files);
              },
              onClick: () => {
                var _a;
                return (_a = fileInputRef.current) == null ? void 0 : _a.click();
              },
              "data-ocid": "submit.dropzone",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Or drag & drop images here · PNG, JPG up to 10MB · Max 4 images" })
            }
          ),
          form.images.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-medium text-foreground mb-3", children: [
              form.images.length,
              " image(s) added"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: form.images.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative group rounded-xl overflow-hidden border border-border warm-shadow",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: img.url,
                      alt: img.name,
                      className: "w-full h-28 object-cover"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "button",
                    {
                      type: "button",
                      onClick: () => removeImage(i),
                      className: "absolute top-2 right-2 w-6 h-6 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity",
                      "data-ocid": `submit.delete_button.${i + 1}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3 h-3" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-2 text-xs text-muted-foreground truncate", children: img.name })
                ]
              },
              img.url
            )) })
          ] })
        ] }),
        step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 animate-slide-in-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold text-foreground", children: "🚀 Review & Submit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border bg-muted/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5 space-y-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                form.branch && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium bg-muted text-muted-foreground px-3 py-1 rounded-full", children: form.branch }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full", children: form.subject || "No subject" })
              ] }),
              form.anonymous && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3 h-3" }),
                " Anonymous"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-foreground text-lg", children: form.title || "(No title)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed", children: form.description || "(No description)" }),
            form.images.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mb-2", children: [
                form.images.length,
                " attachment(s)"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: form.images.map((img) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: img.url,
                  alt: img.name,
                  className: "w-14 h-14 rounded-lg object-cover border border-border"
                },
                img.url
              )) })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl bg-blue-50 border border-blue-100 text-sm text-blue-700", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "What happens next?" }),
            " Your doubt will be submitted and a teacher will respond — usually within 24 hours."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              className: "w-full rounded-xl gradient-primary text-white font-semibold border-0 shadow-primary hover:opacity-90",
              size: "lg",
              onClick: handleSubmit,
              disabled: submitting,
              "data-ocid": "submit.submit_button",
              children: submitting ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 w-4 h-4 animate-spin" }),
                " ",
                "Submitting..."
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "mr-2 w-4 h-4" }),
                " Submit Doubt"
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-8 pt-6 border-t border-border", children: [
          step > 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              className: "rounded-xl",
              onClick: () => setStep((s) => s - 1),
              "data-ocid": "submit.secondary_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
                " Back"
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "ghost",
              className: "rounded-xl text-muted-foreground",
              onClick: () => navigate({ to: "/" }),
              "data-ocid": "submit.cancel_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4 mr-2" }),
                " Cancel"
              ]
            }
          ),
          step < 3 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              className: "rounded-xl gradient-primary text-white border-0 font-medium",
              disabled: step === 1 ? !canProceed1 : false,
              onClick: () => setStep((s) => s + 1),
              "data-ocid": "submit.primary_button",
              children: [
                "Next Step ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
              ]
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              variant: "outline",
              className: "rounded-xl",
              onClick: () => setStep(1),
              "data-ocid": "submit.secondary_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "w-4 h-4 mr-2" }),
                " Edit"
              ]
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-2 mt-6", children: STEPS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `h-2 rounded-full transition-all duration-300 ${step === s.n ? "w-8 bg-primary" : step > s.n ? "w-2 bg-green-500" : "w-2 bg-muted"}`
        },
        s.n
      )) })
    ] })
  ] });
}
export {
  SubmitDoubt as default
};
