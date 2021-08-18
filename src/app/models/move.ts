import { Contact } from "../services/contact.model";
export interface Move {
   _id?: string
   to: Contact,
   at: number,
   amount: number
 }