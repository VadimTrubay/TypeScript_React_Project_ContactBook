import Contact from "../../components/Contact/Contact";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/filters/selectors.js";
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import TableCell from "@mui/material/TableCell";
import { useEffect, useState } from "react";
import { fetchContacts } from "../../redux/contacts/operations.js";
import SearchBox from "../SearchBox/SearchBox.jsx";
import Box from "@mui/material/Box";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const [sort, setSort] = useState(false);
  const [sortedContacts, setSortedContacts] = useState(filteredContacts);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  let handleSortedByName = () => {
    if (!sort) {
      setSortedContacts(
        filteredContacts.sort((a, b) => a.name.localeCompare(b.name))
      );
      setSort(true);
    } else {
      setSortedContacts(
        filteredContacts.sort((a, b) => b.name.localeCompare(a.name))
      );
      setSort(false);
    }
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const boxName = (
    <Box className={styles.box_name}>
      <span>name</span>
      <SwapVertIcon onClick={handleSortedByName} className={styles.swap_icon} />
    </Box>
  );

  const columns = [
    { id: "avatar", label: "avatar", minWidth: 30, align: "center" },
    { id: "name", label: boxName, minWidth: 120, align: "center" },
    { id: "number", label: "number", minWidth: 120, align: "center" },
    { id: "edit", label: "edit", minWidth: 40, align: "center" },
    { id: "delete", label: "delete", minWidth: 40, align: "center" },
  ];

  return (
    <>
      <div>
        <SearchBox />
      </div>
      <div className={styles.table}>
        <Paper className={styles.paper}>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      sx={{
                        minWidth: column.minWidth,
                        fontSize: "16px",
                        fontWeight: 'bold',
                        backgroundColor: "#2aaf00",
                        color: "white",
                        padding: "3px",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredContacts.length > 0
                  ? filteredContacts
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((item) => (
                        <TableRow key={item.id}>
                          <Contact item={item} />
                        </TableRow>
                      ))
                  : sortedContacts
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((item) => (
                        <TableRow key={item.id}>
                          <Contact item={item} />
                        </TableRow>
                      ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={filteredContacts.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
};

export default ContactList;
