# Student Confidence Support System

## Current State
- Full-stack app with React frontend and ICP/Motoko backend
- Pages: LandingPage, OnboardingPage, SubmitDoubt, StudentDashboard, TeacherDashboard, HelpCenter, ChatRoom
- Routing via TanStack Router in App.tsx
- Student dashboard shows doubts, confidence score, badges

## Requested Changes (Diff)

### Add
- `/weekly-test` route and `WeeklyTest.tsx` page
- Weekly Test page with 3 sections:
  1. **Test** -- 10 auto-generated MCQ questions based on common doubt topics (Math, Physics, CS, Chemistry, Biology, English). Questions cycle weekly using current week number as seed.
  2. **Report** -- After submitting, show topic-wise score breakdown, "fear zone" topics (scored <50%), and "strong" topics (scored >70%). Visual progress bars per topic.
  3. **Study Material** -- For each fear zone topic, show a short exam-ready note (key points, formulas, definitions). Collapsible cards.
- Link to Weekly Test from StudentDashboard (prominent card/button)
- Link to Weekly Test in LandingPage navigation

### Modify
- `App.tsx` -- add weeklyTestRoute
- `StudentDashboard.tsx` -- add Weekly Test CTA card

### Remove
- Nothing

## Implementation Plan
1. Create `WeeklyTest.tsx` with full test flow: intro -> questions -> results+report+study material
2. Embed 10 MCQs per topic (Math, Physics, CS, Chemistry, Biology, English) as static question bank
3. Weekly seed selects a subset of questions each week
4. After submission, calculate per-topic scores, show fear zones, render study notes
5. Add route in App.tsx
6. Add CTA card in StudentDashboard.tsx
