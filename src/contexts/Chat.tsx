import { createContext, useState, useEffect } from "react";
import { getProducts } from "../api/shop";
import { deleteProduct } from "../api/user";

const ChatContext = createContext<Partial<any[]>>([]);

export interface ChatState {
  messages: Message[];
}

export interface Message {
  name: string;
  message: string;
}

const initialChat = {
  messages: [],
};

const chatReducer = (state: any, action: any) => {
  switch (action.type) {
    case "add-message":
      state.messages.push(action.payload);
      return { ...state };
    case "clear-messages":
        return {...state, messages: []}
    default:
      return state;
  }
};

export { chatReducer, initialChat, ChatContext };
