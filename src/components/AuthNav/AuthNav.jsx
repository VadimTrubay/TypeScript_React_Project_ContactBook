import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";
import { Breadcrumbs } from "@mui/material";

const AuthNav = () => {
  return (
    <div className={styles.container}>
      <Breadcrumbs aria-label="breadcrumb">
      <NavLink className={styles.nav_link} to={"/register"}>
        Register
      </NavLink>
      /
      <NavLink className={styles.nav_link} to={"/login"}>
        Login
        </NavLink>
        </Breadcrumbs>
    </div>
  );
};

export default AuthNav;
