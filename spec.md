# AskSpark

## Current State
The app has several pages with hardcoded/demo data:
- **StudentDashboard**: `MOCK_DOUBTS` (4 fake doubts with fake teacher names like "Mr. Arjun Das"), `MOCK_NOTIFICATIONS` (3 fake notifications), `TEST_HISTORY` (4 weeks of fake test history), hardcoded `confidenceScore = 73`, `xp = 1240`, greeting "You're doing amazing, Arjun!"
- **TeacherDashboard**: `TEACHER_MOCK_NOTIFICATIONS` (fake notifications referencing "Arjun S."), hardcoded doubt with `student: "Arjun S."`
- **ChatRoom**: `ROOM_MESSAGES` (fake chat messages in group rooms with hardcoded names like "Arjun S.", "Priya M.", etc.), `INITIAL_CONVERSATIONS` (2 pre-filled personal chat conversations)
- **LecturesPage**: Sample lectures marked with no "Sample" label

## Requested Changes (Diff)

### Add
- Empty state UI for doubts: "No doubts submitted yet — Start by asking your first doubt"
- Empty state UI for test history: "No test history available"
- Empty state UI for notifications: "No notifications yet"
- Empty state for personal chat conversations: "No conversations yet"
- "Sample" badge on all lecture cards (both live and recorded) in LecturesPage
- Load real user name from `loadLocalProfile()` in dashboard greeting
- Load real doubts from `localStorage` (key: `askspark_doubts`) for dashboard doubts list
- Load real test history from `localStorage` (key: `askspark_test_history`) for test history section
- Save test results to localStorage when WeeklyTest completes
- Dynamically compute confidenceScore and xp from real doubts count and test scores

### Modify
- **StudentDashboard**: Remove `MOCK_DOUBTS`, `MOCK_NOTIFICATIONS`, `TEST_HISTORY` constants. Replace with localStorage-loaded real data. Greeting should use `localProfile?.name` (fallback to "there"). Confidence score = based on doubts count (e.g. min(doubts.length * 10, 100)). XP = doubts.length * 50.
- **TeacherDashboard**: Remove `TEACHER_MOCK_NOTIFICATIONS` and hardcoded doubt with "Arjun S.". Replace notifications with empty array `[]` (real-time from Firebase would populate). Replace hardcoded doubts with doubts loaded from localStorage (all users' doubts, or empty state).
- **ChatRoom**: Remove `ROOM_MESSAGES` (the pre-filled group chat messages). Group chats start empty. Remove `INITIAL_CONVERSATIONS` and initialize conversations as `[]` — personal chats start empty.
- **WeeklyTest**: On test completion (results phase), save result `{week, score, topics, date}` to `askspark_test_history` in localStorage.

### Remove
- `MOCK_DOUBTS` constant from StudentDashboard
- `MOCK_NOTIFICATIONS` constant from StudentDashboard  
- `TEST_HISTORY` constant from StudentDashboard
- Hardcoded `confidenceScore = 73` and `xp = 1240`
- "You're doing amazing, Arjun!" hardcoded greeting
- `ROOM_MESSAGES` constant from ChatRoom (all pre-filled group chat messages)
- `INITIAL_CONVERSATIONS` constant from ChatRoom
- `TEACHER_MOCK_NOTIFICATIONS` from TeacherDashboard
- Hardcoded doubt with `student: "Arjun S."` from TeacherDashboard

## Implementation Plan
1. Update `StudentDashboard.tsx`: remove all mock constants, load doubts from `localStorage.getItem('askspark_doubts')` (parse JSON array), load test history from `localStorage.getItem('askspark_test_history')`, load notifications as `[]`, derive confidenceScore and xp from real data, fix greeting to use profile name
2. Update `TeacherDashboard.tsx`: remove mock notifications and hardcoded student doubts, show empty states
3. Update `ChatRoom.tsx`: remove `ROOM_MESSAGES` and `INITIAL_CONVERSATIONS`, start both group chat and personal conversations empty
4. Update `WeeklyTest.tsx`: save results to localStorage on completion
5. Update `LecturesPage.tsx`: add "Sample" badge to all lecture cards (live and recorded)
