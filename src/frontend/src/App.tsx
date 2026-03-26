import { Toaster } from "@/components/ui/sonner";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from "@tanstack/react-router";
import { Suspense, lazy } from "react";
import PageSkeleton from "./components/PageSkeleton";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const OnboardingPage = lazy(() => import("./pages/OnboardingPage"));
const StudentDashboard = lazy(() => import("./pages/StudentDashboard"));
const TeacherDashboard = lazy(() => import("./pages/TeacherDashboard"));
const SubmitDoubt = lazy(() => import("./pages/SubmitDoubt"));
const HelpCenter = lazy(() => import("./pages/HelpCenter"));
const ChatRoom = lazy(() => import("./pages/ChatRoom"));
const WeeklyTest = lazy(() => import("./pages/WeeklyTest"));
const BlogList = lazy(() => import("./pages/BlogList"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

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
const blogRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog",
  component: BlogList,
});
const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/$slug",
  component: BlogPost,
});

// Short URL aliases
const blogHesitateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/why-students-hesitate",
  beforeLoad: () => {
    throw redirect({
      to: "/blog/$slug",
      params: { slug: "why-students-hesitate-to-ask-questions" },
    });
  },
  component: () => null,
});

const blogAnonRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blog/benefits-anonymous-doubt",
  beforeLoad: () => {
    throw redirect({
      to: "/blog/$slug",
      params: { slug: "benefits-of-anonymous-doubt-platforms" },
    });
  },
  component: () => null,
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
  blogRoute,
  blogHesitateRoute,
  blogAnonRoute,
  blogPostRoute,
  catchAllRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <Suspense fallback={<PageSkeleton />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}
