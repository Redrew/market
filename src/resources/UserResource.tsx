// import { AnyAction } from "redux";
// import { Payload, defaultPayload } from "../api/fetchPayload";
// import {  } from "../api";
// import PayloadResource from "./Resource";
// import {
  
// } from "../actions";

// export interface User {
//   address?: string;
//   name?: string;
//   payment?: string;
//   loggedIn: boolean;
//   token: string | null;
// }

// const initialUser: Payload<User> = {
//   ...defaultPayload,
//   data: { loggedIn: false, token: null },
// };

// class UserResource extends PayloadResource<User> {
//   getPayload = (action: AnyAction) => ;
//   retrieveStorage = (): any => {
//     try {
//       return JSON.parse(localStorage["user"]);
//     } catch {
//       return null;
//     }
//   };
//   saveToStorage = (payload?: Payload) => {
//     localStorage["user"] = JSON.stringify(payload);
//   };
//   isValid = (payload: any, action: any) => true;
//   initialState = initialUser;
//   delayTime = 5000;
//   REQUEST_PAYLOAD = ;
//   FETCH_PAYLOAD = ;
//   RECEIVE_PAYLOAD = ;

// }

// export const userResource = new UserResource();
export default {}