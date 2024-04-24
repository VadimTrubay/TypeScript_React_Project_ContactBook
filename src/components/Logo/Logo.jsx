import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import styles from "./Logo.module.css";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <div className={styles.container}>
      <NavLink className={styles.nav_link} to='/'>
              <AdbIcon sx={{fontSize: "15px"}} />
      <Typography
        variant="h6"
        noWrap
        sx={{
          mr: 2,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: "inherit",
          textDecoration: "none",
        }}
      >
        Phonebook
      </Typography>
      </NavLink>
    </div>
  );
};

export default Logo;
