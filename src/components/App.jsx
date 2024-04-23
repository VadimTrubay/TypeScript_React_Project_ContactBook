import "modern-normalize";
import styles from "./App.module.css"
import { Route, Routes } from "react-router-dom";
import { lazy, useEffect } from "react";
import { Layout } from "./Layout/Layout.jsx";
import { RestrictedRoute } from "./RestrictedRoute.jsx";
import { PrivateRoute } from "./PrivateRoute.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsRefreshing } from "../redux/auth/selectors.js";
import { refreshUser } from "../redux/auth/operations.js";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Terms from "../pages/TermsPage/Terms.jsx";
import LoginForm from "../components/LoginForm/LoginForm.jsx";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm.jsx";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const ContactsPage = lazy(() =>
  import("../pages/ContactsPage/ContactsPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("../pages/NotFoundPage/NotFoundPage.jsx")
);

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Box sx={{ width: "100%", marginTop: 4 }}>
      <LinearProgress color="success" />
    </Box>
  ) : (
    <Layout className={styles.container}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectTo="/login"
              component={<RegistrationForm />}
            />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute
              redirectTo="/contacts "
              component={<LoginForm />}
            />
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route path="terms" element={<Terms />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
