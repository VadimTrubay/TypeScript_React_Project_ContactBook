import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { Formik, Field } from "formik";
import { TextField } from "formik-mui";
import Button from "@mui/material/Button";
import { StyledForm, StyledLabel } from "./ContactForm.styled";
import { addContact } from "../../redux/contacts/operations";
import { validationSchema } from "../../validate/validationSchema.js";
import { selectContacts } from "../../redux/contacts/selectors.js";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  return (
    <>
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          name: "",
          number: "",
        }}
        onSubmit={(values, actions) => {
          if (contacts.find((contact) => contact.name === values.name)) {
            toast.error(`${values.name} is already in contacts`);
            actions.resetForm();
            return;
          }
          dispatch(
            addContact({
              name: values.name,
              number: values.number,
            })
          );
          toast.success(`Contact added successfully`);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <StyledLabel>
            <Field
              component={TextField}
              label="Name*"
              name="name"
              variant="standard"
              sx={{ minWidth: 400 }}
              placeholder="a-z, A-Z"
            />
          </StyledLabel>
          <StyledLabel>
            <Field
              component={TextField}
              label="Number*"
              name="number"
              variant="standard"
              type="string"
              sx={{ minWidth: 400 }}
              placeholder="+xxxxxxxxxx"
            />
          </StyledLabel>
          <div className={styles.button_center}>
            <Button className={styles.button} variant="contained" type="submit">
              Add contact
            </Button>
          </div>
        </StyledForm>
      </Formik>
      <Toaster position="top-center" />
    </>
  );
};

export default ContactForm;
