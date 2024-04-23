import { useState } from "react";
import { useDispatch } from "react-redux";
import TableCell from "@mui/material/TableCell";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Grid from "@mui/material/Grid";
import EditIcon from "@mui/icons-material/Edit";
import Avatar from "@mui/material/Avatar";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { StyledBox, Text } from "./Contact.styled";
import { style } from "./Contact.styled";
import styles from "./Contact.module.css";
import toast from "react-hot-toast";
import DoneIcon from "@mui/icons-material/Done";
import Box from "@mui/material/Box";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useFormik } from "formik";
import { validationSchema } from "../../validate/validationSchema.js";

const Contact = ({ item: { name, number, id } }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const dispatch = useDispatch();

  const handleOpenEditModal = () => setOpenEditModal(true);
  const handleCloseEditModal = () => setOpenEditModal(false);
  const handleOpenDeleteModal = () => setOpenDeleteModal(true);
  const handleCloseDeleteModal = () => setOpenDeleteModal(false);

  const formik = useFormik({
    initialValues: {
      id: id,
      name: name,
      number: number,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (formik.isValid) {
        dispatch(updateContact(values));
        toast.success(`Contact updated successfully`);
        handleCloseEditModal();
      }
    },
  });

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
    toast.error(`Contact ${name} deleted successfully`);
    handleCloseDeleteModal();
  };

  const closeModal = () => {
    setOpenEditModal(false);
    setOpenDeleteModal(false);
  };

  return (
    <>
      <TableCell component="th" scope="row"
        sx={{padding: "3px"}}>
        <Avatar className={styles.avatar} />
      </TableCell>
      <TableCell sx={{padding: "3px"}} align="center">{name}</TableCell>
      <TableCell sx={{padding: "3px"}} align="center">{number}</TableCell>
      <TableCell sx={{padding: "3px"}} align="center">
        <Grid item xs={2}>
          <EditIcon
            sx={{ color: "#2aaf00", padding: "3px" }}
            cursor="pointer"
            onClick={() => handleOpenEditModal()}
          />
        </Grid>
      </TableCell>
      <TableCell align="center">
        <Grid item xs={2}>
          <DeleteForeverIcon
            sx={{ color: "#961010", padding: "3px" }}
            cursor="pointer"
            onClick={handleOpenDeleteModal}
          />
        </Grid>
      </TableCell>

      <Modal
        open={openEditModal}
        onClose={handleCloseEditModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.close}>
            <HighlightOffIcon onClick={closeModal} />
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Text className={styles.title_edit}>Edit contact</Text>
          </Typography>
          <StyledBox component="form" onSubmit={formik.handleSubmit}>
            <TextField
              id="name"
              name="name"
              variant="standard"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              id="number"
              name="number"
              variant="standard"
              value={formik.values.number}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
            />
            <Button type="submit">
              <DoneIcon sx={{ fontSize: 40, color: "green" }} />
            </Button>
          </StyledBox>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}></Typography>
        </Box>
      </Modal>
      <Modal
        open={openDeleteModal}
        onClose={handleCloseDeleteModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.close}>
            <HighlightOffIcon onClick={closeModal} />
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <Text className={styles.title_delete}>Delete contact</Text>
            <Text>Are you sure you want to delete this contact?</Text>
            <Text>&apos;{name}&apos;</Text>
          </Typography>
          <StyledBox component="form" onSubmit={handleDeleteContact}>
            <Button type="submit">
              <DoneIcon sx={{ fontSize: 40, color: "red" }} />
            </Button>
          </StyledBox>
          <Typography id="modal-modal-description" sx={{ mt: 3 }}></Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Contact;
