import axios, {AxiosResponse, AxiosError} from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

export interface RemoveContactData {
  id: string;
}

export interface NewContactData {
  name: string;
  number: string;
}

export interface GetContactsData extends RemoveContactData, NewContactData {
}

export interface EditContactData extends RemoveContactData, NewContactData {
}

export const getContacts = async (): Promise<AxiosResponse<GetContactsData[]>> => {
  return await axios.get("/contacts");
};

export const newContact = async ({name, number}: NewContactData): Promise<AxiosResponse<NewContactData>> => {
  return await axios.post("/contacts", {name, number});
};

export const removeContact = async (id: RemoveContactData): Promise<AxiosResponse<RemoveContactData>> => {
  return await axios.delete(`/contacts/${id}`);
};

export const editContact = async ({id, name, number}: EditContactData): Promise<AxiosResponse<EditContactData>> => {
  return await axios.patch(`/contacts/${id}`, {name, number});
};
