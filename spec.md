# AskSpark

## Current State
The app has multiple pages: LandingPage, OnboardingPage, StudentDashboard, TeacherDashboard, ProfilePage, SubmitDoubt, LearningHub, LecturesPage, PracticePage, SupportPage, LiveClassPage, VideoCallPage, WeeklyTest, ChatRoom, BlogList, BlogPost, HelpCenter, AdminPanel.

All routes are defined in App.tsx using TanStack Router.

## Requested Changes (Diff)

### Add
- Nothing new

### Modify
- Fix all click/navigation bugs across all pages
- Fix save button on ProfilePage (name edit, teacher code create/update/reset)
- Fix role switch: first-time switch prompts code creation, subsequent switches require code, redirect to correct dashboard
- Fix all navigation: back buttons, dashboard redirect, post-save redirects all go to correct role-based dashboard
- Fix all button disabled/loading states so they never get permanently stuck
- Ensure all routes in App.tsx are reachable and connected correctly
- Fix LandingPage: 'Join as Teacher' sets role=teacher and redirects to /dashboard/teacher correctly
- Fix dashboard redirect route: /dashboard smart-redirects based on role
- Fix notification bell click handlers to navigate correctly
- Fix ProfilePage back button to go to /dashboard/teacher or /dashboard/student based on role

### Remove
- Nothing

## Implementation Plan
1. Audit ProfilePage: ensure all save handlers have try/catch/finally, setLoading(false) always called, Promise.race with 8s timeout on all Firebase calls, navigate to correct dashboard after save
2. Audit LandingPage: ensure Join as Teacher sets role and navigates instantly
3. Audit App.tsx dashboardRedirectRoute: reads role from localStorage, redirects to /dashboard/teacher or /dashboard/student
4. Audit StudentDashboard and TeacherDashboard: ensure all onClick handlers are defined and working, back/home navigation correct
5. Ensure all routes are registered in routeTree
6. Fix any TypeScript errors that could block functionality
