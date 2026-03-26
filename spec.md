# AskSpark — Smart Features Upgrade

## Current State
AskSpark is a full EdTech platform with:
- Student & Teacher dashboards (localStorage-based, no auth)
- Doubt submission, chat, group rooms, leaderboard, points
- Learning Hub: Lectures, DPP Practice, AI Bot support
- WebRTC calls (teacher-initiated), live class broadcast, in-class chat/doubt
- Blog, SEO, notifications bell (existing)
- Gamification (points, badges, leaderboard) already implemented

## Requested Changes (Diff)

### Add
- **PDF Notes download** on LiveClassPage: after class ends, show a "Download Notes PDF" button that generates a jsPDF document with lecture title, chat messages (as topics covered), and key points
- **Notification system** with bell icon in Header: show count badge, dropdown with notifications for students (incoming call, class started, doubt answered) and teachers (new doubt in class, call request). Store in localStorage. Clicking a notification navigates to the relevant page and marks it read.
- **Answer Rating** on SubmitDoubt / doubts list: after a doubt is shown as "answered", student can rate 1–5 stars. Save rating in localStorage keyed by doubtId. Show average teacher rating on TeacherDashboard.
- **Progress Analytics card** on StudentDashboard: "Your Progress" section showing doubts asked (count from localStorage), classes attended (count from localStorage callHistory), and a simple progress bar.
- **Ad placeholder banners** on StudentDashboard and LearningHub: styled card saying "📢 Your Ad Here — Sponsor AskSpark" with a subtle border. Non-intrusive, small, at bottom of page.
- **Sponsorship footer section**: "Powered by [Sponsor Name]" line in the app footer on LandingPage.
- **Admin Panel** at `/admin`: password-protected (hardcoded: "spark2024"). Shows: total users count (from localStorage), doubts list, basic activity stats. Simple table UI.
- **Premium badge** on StudentDashboard: demo "Go Premium" button that shows a modal explaining premium features (Priority answers, faster response, advanced analytics). No payment — just a UI indicator for demo.

### Modify
- **LiveClassPage**: add Download Notes PDF button that appears after class ends (teacher side)
- **Header**: add notification bell with unread count badge, clicking opens dropdown
- **StudentDashboard**: add Progress Analytics card and ad banner
- **LearningHub**: add ad banner at bottom
- **TeacherDashboard**: add average rating display and notification integration
- **LandingPage footer**: add sponsorship line
- **main.tsx router**: add `/admin` route

### Remove
- Nothing removed

## Implementation Plan
1. Create `src/frontend/src/hooks/useNotifications.ts` — localStorage-based notifications store with add/read/clear functions
2. Create `src/frontend/src/hooks/useRatings.ts` — localStorage ratings store keyed by doubtId
3. Create `src/frontend/src/components/NotificationBell.tsx` — bell icon with badge, dropdown list
4. Create `src/frontend/src/pages/AdminPanel.tsx` — password gate + stats dashboard
5. Modify `LiveClassPage.tsx` — add jsPDF download button after class ends
6. Modify `StudentDashboard.tsx` — add Progress Analytics card, ad banner, premium button
7. Modify `TeacherDashboard.tsx` — add average rating display
8. Modify `LearningHub.tsx` — add ad banner
9. Modify `LandingPage.tsx` — add sponsorship line in footer
10. Modify `Header` component — integrate NotificationBell
11. Modify `main.tsx` — add /admin route
12. Install jsPDF via package.json
