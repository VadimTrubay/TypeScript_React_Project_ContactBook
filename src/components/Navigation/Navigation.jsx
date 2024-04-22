import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import styles from "../Navigation/Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import { Breadcrumbs } from "@mui/material";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={styles.container}>
      <Breadcrumbs aria-label="breadcrumb">
        <NavLink className={styles.nav_link} to={"/"}>
          HOME
        </NavLink>
        {isLoggedIn && (
          <Typography>
            <NavLink className={styles.nav_link} to={"/contacts"}>
              CONTACTS
            </NavLink>
          </Typography>
        )}
      </Breadcrumbs>
    </div>
  );
};

export default Navigation;
