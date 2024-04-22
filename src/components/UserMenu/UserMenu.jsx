import { NavLink } from "react-router-dom";
import styles from "./UserMenu.module.css";
import { logOut } from "../../redux/auth/operations.js";
import Text from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors.js";
import Avatar from "@mui/material/Avatar";

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={styles.container}>
      <Avatar className={styles.avatar} />
      {/*<Text>Welcome, </Text>*/}
      <Text className={styles.username}>{user.name}</Text>
      <NavLink
        className={styles.nav_link}
        to={"/login"}
        onClick={() => dispatch(logOut())}
      >
        {" "}
        Logout
      </NavLink>
    </div>
  );
};

export default UserMenu;
