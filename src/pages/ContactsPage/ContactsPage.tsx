import ContactForm from "../../components/ContactForm/ContactForm.tsx";
import ContactList from "../../components/ContactList/ContactList";
import React from "react";

const ContactsPage: React.FC = () => {
  return (
    <>
      <h1>Contacts</h1>
      <ContactForm/>
      <ContactList/>
    </>
  );
};

export default ContactsPage;
