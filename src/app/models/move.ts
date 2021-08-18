import { Contact } from "./contact";
export interface Move {
   _id?: string
   to: Contact,
   at: number,
   amount: number
 }