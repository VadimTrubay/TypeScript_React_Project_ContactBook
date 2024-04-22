import { useSelector } from "react-redux";
import { selectError } from "../../redux/contacts/selectors.js";
import { AppBar, CircularProgress, Toolbar } from "@mui/material";
import Logo from "../Logo/Logo.jsx";
import UserMenu from "../UserMenu/UserMenu.jsx";
import AuthNav from "../AuthNav/AuthNav.jsx";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import { selectIsLoading } from "../../redux/contacts/selectors.js";
import styles from "./Header.module.css";

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <AppBar className={styles.app_bar} position="static">
        <Toolbar className={styles.app_bar}>
          <Logo />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
      {isLoading && !error && (
        <CircularProgress
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "red",
            zIndex: 9999,
          }}
        />
      )}
    </>
  );
};

export default Header;
