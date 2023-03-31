import { Suspense, lazy } from "react";
import { useRoutes, Navigate } from "react-router-dom";

import MainLayout from "src/components/layouts/main";
import SuspenseLoader from "src/components/suspenseLoader";
// import LoanStatusList from "./pages/main/LoanStatus/LoanStatusList";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

// loan-request
const LoanRequestList = Loader(lazy(() => import("src/pages/main/LoanRequest/LoanRequestList")));
const LoanRequestRoomplan = Loader(lazy(() => import("src/pages/main/LoanRequest/LoanRequestRoomPlan")));

// loan-status
const LoanStatusList = Loader(lazy(() => import("src/pages/main/LoanStatus/LoanStatusList")));

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    // navigate
    { path: "/", element: <Navigate to="/loan-request/list" replace /> },

    // loan request
    { path: "/loan-request/list", element: <LoanRequestList /> },
    { path: "/loan-request/roomplan", element: <LoanRequestRoomplan /> },

    // loan status
    { path: "/loan-status/list", element: <LoanStatusList /> },
    { path: "/loan-status/roomplan", element: <></> }
  ]
};

// const AuthRoutes = {
//   path: "/auth",
//   element: <></>,
//   children: [
//     { path: "/auth/login", element: <></> },
//     { path: "/auth/register", element: <></> }
//   ]
// };

// const BackofficeRoutes = {
//   path: "/backoffice",
//   element: <></>,
//   children: [
//     { path: "/backoffice/1", element: <></> },
//     { path: "/backoffice/2", element: <></> }
//   ]
// };

const ThemeRoutes: React.FC = () => {
  return useRoutes([MainRoutes]);
};

export default ThemeRoutes;
