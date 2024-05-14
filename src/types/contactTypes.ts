export type idContactType = {
  id: string;
}

export type addContactType = {
  name: string;
  number: string;
}

export interface ContactType {
  id: string;
  name: string;
  number: string;
}

export interface ContactPropsType {
  contact: ContactType
}

export interface initialContactsType {
  items: Array<ContactType> | [];
  selectedItem: ContactType | null;
  loading: boolean;
  error: string | null;
}

export interface ContactFormDataType extends ContactType {
}
