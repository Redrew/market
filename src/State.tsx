import React, { createContext, useReducer, useEffect } from "react";
import {
  storeReducer,
  initialStore,
  StoreContext,
  asyncStoreDispatchWrapper,
  useStore,
} from "./contexts/Store";
import { chatReducer, initialChat, ChatContext } from "./contexts/Chat";

// delete window.localStorage["user"]
// delete window.localStorage["cart"]

export interface ContextType {
  state: any;
  dispatch: any;
}

export const UserContext = createContext<Partial<ContextType>>({});
export const CartContext = createContext<Partial<ContextType>>({});

export interface UserState {
  has_account: boolean;
  username: string;
  userId: string;
  email: string;
  is_seller: boolean;
  accessToken: string;
  cart: CartItem[];
  store?: string;
}

export interface CartState {
  items: CartItem[];
}

export interface CartItem {
  _id: string;
  name: string;
  quantity: number;
}

export const initialUser = {
  has_account: false,
  username: "",
  userId: "",
  email: "",
  is_seller: true,
  accessToken: "",
  cart: [],
};

export const initialCart = {
  items: [],
};

const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case "set":
      const has_account =
        action.payload?.has_account != null
          ? action.payload?.has_account
          : state.has_account ||
            action.payload?.username ||
            action.payload?.email ||
            action.payload?.userId;
      return {
        ...state,
        ...action.payload,
        has_account: has_account,
      };

    case "logout":
      return { ...initialUser, has_account: true };

    case "add-to-cart":
      return { ...state, cart: addToCart(state.cart, action.payload) };

    case "clear-cart":
      return { ...state, cart: [] };

    default:
      return state;
  }
};

const cartReducer = (state: any, action: any) => {
  switch (action.type) {
    case "add-to-cart":
      return { ...state, items: addToCart(state.items, action.payload) };

    case "clear-cart":
      return { ...state, items: [] };

    default:
      return state;
  }
};

const persistedUser = JSON.parse(window.localStorage["user"] || "{}");
const persistedCart = JSON.parse(window.localStorage["cart"] || "{}");
const persistedChat = JSON.parse(window.localStorage["chat"] || "{}");

const AppContextProvider: React.FC = (props) => {
  const [userState, userDispatch] = useReducer(userReducer, {
    ...initialUser,
    ...persistedUser,
  });
  const userValue = { state: userState, dispatch: userDispatch };
  useEffect(() => {
    window.localStorage["user"] = JSON.stringify(userState);
  }, [userState]);

  const [cartState, cartDispatch] = useReducer(cartReducer, {
    ...initialCart,
    ...persistedCart,
  });
  const cartValue = { state: cartState, dispatch: cartDispatch };
  useEffect(() => {
    window.localStorage["cart"] = JSON.stringify(cartState);
  }, [cartState]);

  const [storeState, storeDispatch] = useReducer(storeReducer, {
    initialStore,
  });
  const storeValue = [storeState, storeDispatch, useStore];

  const chatValue = useReducer(chatReducer, {...initialChat, ...persistedChat});
  useEffect(() => {
    window.localStorage["chat"] = JSON.stringify(chatValue[0])
  }, [chatValue[0]])

  return (
    <UserContext.Provider value={userValue}>
      <CartContext.Provider value={cartValue}>
        <StoreContext.Provider value={storeValue}>
          <ChatContext.Provider value={chatValue}>
            {props.children}
          </ChatContext.Provider>
        </StoreContext.Provider>
      </CartContext.Provider>
    </UserContext.Provider>
  );
};

const addToCart = (cart: CartItem[], item: CartItem) => {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i]._id === item._id) {
      cart[i].quantity += item.quantity;
      if (cart[i].quantity <= 0) cart.splice(i, 1);
      break;
    }
  }
  if (i == cart.length && item.quantity > 0) cart.push(item);

  console.log(cart);
  return cart;
};
export { AppContextProvider };
