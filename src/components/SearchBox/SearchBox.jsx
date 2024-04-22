import styles from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice.js";
import { selectFilter } from "../../redux/filters/selectors";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

const SearchBox = () => {
  const dispatch = useDispatch();
  const contactToFind = useSelector(selectFilter);

  const handleFilter = (evt) => {
    dispatch(changeFilter(evt.currentTarget.value));
  };

  return (
    <div className={styles.search_box}>
      <Paper
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 250 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search contacts"
          inputProps={{ "aria-label": "search contacts" }}
          value={contactToFind}
          onChange={handleFilter}
        />
      </Paper>
    </div>
  );
};

export default SearchBox;
