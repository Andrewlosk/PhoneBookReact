import { lazy, Suspense } from "react";
import { Layout } from "./Layout/Layout";

import { Routes, Route, Outlet } from "react-router-dom";

import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";

const HomePage = lazy(() => import("./pages/Home"));
const LoginPage = lazy(() => import("./pages/Login"));
const RegisterPage = lazy(() => import("./pages/Register"));
const PhoneListMenu = lazy(() => import("./pages/PhoneListMenu"));

// const Layout = () => {
//   return <Outlet />;
// };

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={<RegisterPage />}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={<PhoneListMenu />} redirectTo="/login" />
              }
            />

          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
