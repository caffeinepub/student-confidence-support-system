# AskSpark

## Current State
Role switching exists on the Profile page. First-time teacher switch requires no code; subsequent switches validated against a global hardcoded code (`SPARK2024`). No per-user teacher code exists.

## Requested Changes (Diff)

### Add
- Per-user teacher code stored in Firebase Firestore (`users/{id}.teacherCode`)
- `create-teacher-code` step: after first-time teacher confirm, prompt user to set their own code (min 6 chars, confirmed twice) before switching
- `reset-teacher-code` step: self-service reset flow reachable via "Forgot Teacher Code?" link in the code entry dialog
- `saveTeacherCode`, `validateTeacherCode`, `getTeacherCodeFromFirestore` utility functions
- Show/hide toggle (eye icon) on all password inputs in the code dialogs

### Modify
- `useRoleSwitch.ts`: remove global `TEACHER_CODE`; validate against Firestore-saved per-user code; add local hash cache fallback
- `ProfilePage.tsx`: add new `SwitchStep` variants; wire up create/reset flows; update hint text to reflect per-user code
- `package.json`: add `firebase` as a runtime dependency (was missing)

### Remove
- Global `TEACHER_CODE = "SPARK2024"` constant

## Implementation Plan
1. Update `useRoleSwitch.ts` — remove global code, add `getTeacherCodeFromFirestore`, `saveTeacherCode`, `validateTeacherCode`
2. Update `ProfilePage.tsx` — add `create-teacher-code` and `reset-teacher-code` dialog steps
3. Install `firebase` package
4. Validate and build
