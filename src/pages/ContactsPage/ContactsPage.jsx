import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import ContactList from "../../components/ContactList/ContactList";

const ContactsPage = () => {
  return (
    <>
      <h1>Contacts</h1>
      <ContactForm />
      <ContactList />
    </>
  );
};

export default ContactsPage;
