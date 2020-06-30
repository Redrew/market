import React, { useState, useEffect, useContext } from "react";
import { IonLabel, IonList, IonItem, IonButton } from "@ionic/react";
import { ChatContext, Message } from "../contexts/Chat";
import { UserContext } from "../State";
import { ws_url } from "../api/config";

const Chat: React.FC = () => {
  const [chatState, chatDispatch] = useContext(ChatContext);
  const userState = useContext(UserContext).state;
  const [message, setMessage] = useState("");
  const [ws, setWs] = useState<any>(() => {
    return new WebSocket(ws_url);
  });
  useEffect(() => {
    ws.onopen = () => {
      console.log("connected to ws");
    };
    ws.onmessage = (ev: any) => {
      const message = JSON.parse(ev.data);
      console.log(message);
      chatDispatch({ type: "add-message", payload: message });
    };
    ws.onclose = () => {
      console.log("disconnected from ws");
      setWs(new WebSocket(ws_url));
    };
    console.log(ws);
  }, [ws, chatDispatch]);

  return (
    <>
      <IonList>
        {chatState.messages.map((message: Message, idx: number) => (
          <IonItem key={idx}>
            <IonLabel>
              <h3>{message.name}</h3>
              {message.message}
            </IonLabel>
          </IonItem>
        ))}
      </IonList>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = { name: userState.username, message: message };
          ws.send(JSON.stringify(data));
          setMessage("");
        }}
      >
        <input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </form>
      <IonButton onClick={() => chatDispatch({ type: "clear-messages" })}>
        Clear Chat
      </IonButton>
    </>
  );
};

export default Chat;
