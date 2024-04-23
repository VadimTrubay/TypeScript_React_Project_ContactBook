import Typography from "@mui/material/Typography";
import AdbIcon from "@mui/icons-material/Adb";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={styles.nav_link}>
      <AdbIcon />
      <Typography
        variant="h6"
        noWrap
        component="a"
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
    </div>
  );
};

export default Logo;
