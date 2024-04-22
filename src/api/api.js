import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export const getContacts = async () => {
  const response = await axios.get("/contacts");
  return response.data;
};

export const newContact = async ({ name, number }) => {
  const response = await axios.post("/contacts", { name, number });
  return response.data;
};

export const removeContact = async (id) => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};

export const editContact = async (id, name, number) => {
  const response = await axios.patch(`/contacts/${id}`, { name, number });
  return response.data;
};
