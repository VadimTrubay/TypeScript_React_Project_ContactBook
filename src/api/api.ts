import axios, {AxiosResponse, AxiosError} from "axios";
import {addContactType, ContactType, idContactType} from "../types/contactTypes.ts";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";


export const getContacts = async (): Promise<AxiosResponse<ContactType[]>> => {
  return await axios.get("/contacts");
};

export const newContact = async ({name, number}: addContactType): Promise<AxiosResponse<ContactType>> => {
  return await axios.post("/contacts", {name, number});
};

export const removeContact = async (id: idContactType): Promise<AxiosResponse<idContactType>> => {
  return await axios.delete(`/contacts/${id}`);
};

export const editContact = async ({id, name, number}: ContactType): Promise<AxiosResponse<ContactType>> => {
  return await axios.patch(`/contacts/${id}`, {name, number});
};
