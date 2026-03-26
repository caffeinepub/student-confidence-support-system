import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";
import ChatRoom from "./pages/ChatRoom";
import HelpCenter from "./pages/HelpCenter";
import LandingPage from "./pages/LandingPage";
import OnboardingPage from "./pages/OnboardingPage";
import StudentDashboard from "./pages/StudentDashboard";
import SubmitDoubt from "./pages/SubmitDoubt";
import TeacherDashboard from "./pages/TeacherDashboard";
import WeeklyTest from "./pages/WeeklyTest";

// Root route
const rootRoute = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <Toaster richColors position="top-right" />
    </>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LandingPage,
});

const onboardingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/onboarding",
  component: OnboardingPage,
});

const submitRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/submit",
  component: SubmitDoubt,
});

const studentDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard/student",
  component: StudentDashboard,
});

const teacherDashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/dashboard/teacher",
  component: TeacherDashboard,
});

const helpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/help",
  component: HelpCenter,
});

const chatRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/chat",
  component: ChatRoom,
});

const weeklyTestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/weekly-test",
  component: WeeklyTest,
});

const catchAllRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  beforeLoad: () => {
    throw redirect({ to: "/" });
  },
  component: () => null,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  onboardingRoute,
  submitRoute,
  studentDashboardRoute,
  teacherDashboardRoute,
  helpRoute,
  chatRoute,
  weeklyTestRoute,
  catchAllRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
