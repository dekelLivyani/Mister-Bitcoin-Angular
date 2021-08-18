import { Move } from "./move";

export interface User {
   _id?: string,
   name: string,
   coins: number,
   moves: Move[]
}
