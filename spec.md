# AskSpark

## Current State
- Profile is stored in localStorage via `useLocalProfile.ts` (fields: userId, displayName, role, userType, userClass, userBranch)
- `useSubmitProfile` mutation saves to localStorage, no auth required
- `StudentDashboard` has a hardcoded "Arjun Sharma" name in the navbar; no profile image or interests shown
- Navbar shows initials "AS" in a gradient box, no real avatar
- No `/profile` route exists
- No profile image upload capability
- No interests field in profile
- Teachers have the same profile shape as students

## Requested Changes (Diff)

### Add
- `profileImageUrl` and `interests` fields to `LocalProfile` interface
- `saveLocalProfile` / `useSubmitProfile` to persist `profileImageUrl` and `interests`
- `/profile` route and `ProfilePage` component for viewing and editing profile
- `CameraCapture` component (or reuse existing camera hook) that supports both mobile camera and desktop webcam — shows live preview, allows capture or file upload from device, returns a data URL
- Profile image stored as base64 dataURL in localStorage (no Firebase Storage dependency since auth-free; Firebase Storage upload is optional/graceful-fail if firebase config is present)
- Interests selector for students only: multi-select chips for Maths, Physics, Programming, Electronics, Biology
- Circular avatar in all navbars (StudentDashboard, TeacherDashboard, LandingPage if profile exists) — clicking avatar navigates to `/profile`
- "Edit Profile" quick-access button on StudentDashboard header and TeacherDashboard header
- Interests displayed as small colored tags under student name in StudentDashboard navbar
- Interests displayed on the `/profile` page
- Profile name in dashboard reads from `loadLocalProfile()` not hardcoded

### Modify
- `LocalProfile` interface: add `profileImageUrl?: string` and `interests?: string[]`
- `useSubmitProfile` mutation: accept and persist `profileImageUrl` and `interests`
- `StudentDashboard` navbar: replace hardcoded initials box with circular avatar (shows image if set, else initials); add interests tags under name; add "Edit Profile" button; read name from localStorage profile
- `TeacherDashboard` navbar: replace initials box with circular avatar; add "Edit Profile" button; read name from localStorage
- `App.tsx`: add `/profile` route
- `OnboardingPage`: optionally allow skipping image/interests (they can be set later)

### Remove
- Hardcoded "Arjun Sharma" and "AS" initials in StudentDashboard

## Implementation Plan
1. Update `LocalProfile` interface in `useLocalProfile.ts` — add `profileImageUrl` and `interests`
2. Update `useSubmitProfile` in `useQueries.ts` — accept new fields
3. Create `src/frontend/src/pages/ProfilePage.tsx`:
   - Shows profile info (name, role, class/branch)
   - Camera/upload section: button opens modal with two options — "Take Photo" (camera/webcam) and "Upload from Device" (file input); shows preview; on confirm saves base64 dataURL to profile
   - Interests chips (students only): Maths, Physics, Programming, Electronics, Biology — multi-select; saved to profile
   - "Save Changes" button
4. Create `src/frontend/src/components/AvatarButton.tsx`:
   - Circular avatar showing profile image or initials fallback
   - Clickable, navigates to `/profile`
5. Update `StudentDashboard.tsx`:
   - Replace hardcoded name/initials with `loadLocalProfile()` data
   - Replace gradient box with `AvatarButton`
   - Show interests as small Badge chips under name in navbar
   - Add "Edit Profile" icon/button in navbar
6. Update `TeacherDashboard.tsx`: same avatar + edit profile button
7. Update `App.tsx`: add `/profile` lazy route
