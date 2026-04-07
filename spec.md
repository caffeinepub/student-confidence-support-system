# AskSpark Dashboard UI Redesign

## Current State

The app has two separate dashboard files:
- `src/frontend/src/pages/StudentDashboard.tsx` (1411 lines) — student view with doubts, badges, confidence ring, AskSpark bot, video call modal, notifications
- `src/frontend/src/pages/TeacherDashboard.tsx` (736 lines) — teacher view with doubts management, answer system, live class, student list, chat

Current design uses glassmorphism utility class `.glass-card` in index.css, generic card layouts, no gradient background on the page itself, and standard shadcn card/badge components with basic colors.

## Requested Changes (Diff)

### Add
- Soft gradient page background: light blue → purple → indigo (applied as a wrapper `min-h-screen` div in both dashboards)
- Hero welcome section with large "Welcome back 👋" heading + motivational subtitle + Confidence Score card (colorful, highlighted)
- Quick Action Grid: 4 glassmorphism cards (Ask Doubt, Join Live Class, Search Doubts, Chat Support) each with icon, title, short description, and hover scale/glow effect
- Problem → Solution section in student dashboard: 3 problem cards (Fear of asking, Lack of confidence, No instant help) + 4 solution cards (Anonymous doubts, Teacher answers, Live classes, Smart search)
- Video Solutions section: card-based previews with thumbnail + title (reuse existing DoubtSearch-style embed logic)
- Floating AI chat button: bottom-right, translucent gradient pill button replacing current inline bot trigger
- Teacher dashboard header: large "Teacher Dashboard" title + 3 stats cards (Doubts Solved, Students Helped, Rating)
- Teacher doubts panel with glassmorphism card layout, quick reply inline per doubt
- Teacher performance analytics cards (simple grid)

### Modify
- index.css: Update CSS custom properties to premium blue-purple-indigo palette. Add `dashboard-gradient` utility class for the page background. Enhance `.glass-card` with more blur and white/opacity layering.
- StudentDashboard: Wrap entire page in gradient background. Redesign all sections in order: Hero → Quick Actions → Problem/Solution → Recent Doubts → Video Solutions. Preserve all Firebase hooks, doubt fetching, notification, video call, rating logic entirely unchanged.
- TeacherDashboard: Wrap in same gradient. Redesign header with stats. Redesign doubts panel, live class section, student chat section, performance cards. Preserve all Firebase hooks, answer submission, live class, call logic entirely unchanged.
- tailwind.config.js: Ensure `glass` and `dashboard-gradient` utilities are available, add smooth hover transition config.

### Remove
- Old flat/plain card layouts in dashboards (replace with glassmorphism equivalents)
- Any remaining inline hardcoded color styles (replace with design tokens)

## Implementation Plan

1. Update `src/frontend/src/index.css` — new OKLCH token palette (blue-purple-indigo), enhanced `.glass-card`, new `.dashboard-gradient` background utility, `.action-card` hover utility
2. Delegate full StudentDashboard.tsx and TeacherDashboard.tsx redesign to the frontend subagent, preserving all existing logic (Firebase hooks, WebRTC, notifications, routing) while replacing only UI markup and styling
3. Validate build (typecheck + lint)
4. Deploy
