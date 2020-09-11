import React, { useEffect, useState } from "react";
import SendBox from "./SendBox/sendbox";
import socket from "../../services/sockets";
import HeaderChat from "./Header/headchat";
import MessageBox from "./Messages/messages";
import { auth } from "../../Firebase/firebase.utils";
import { MainDiv } from "./chatbox.style";

interface Userinfo {
  displayName: string;
  email: string;
}
interface Props {
  user: Userinfo;
  history: any;
}

const Chatbox: React.FC<Props> = ({ user, history }) => {
  const [messages, setmessages] = useState<any>([]);

  useEffect(() => {
    let room = localStorage.getItem("chatroom");
    if (!room) {
      auth.signOut();
    }
    socket.emit("join", { user: user.displayName, room }, () => {
      auth.signOut();
      history.push("/");
    });
    return () => {
      socket.emit("disconnect");
      socket.off("connection");
    };
  }, [user, history]);
  useEffect(() => {
    socket.once("message", (message: any) => {
      setmessages(messages.concat(message));
    });
  }, [messages]);
  const handleclick: (value: string | string[]) => void = (v) => {
    socket.emit("sendmessage", { user: user.displayName, message: v });
  };
  return (
    <MainDiv>
      <HeaderChat />
      <MessageBox user={user} messages={messages} />
      <SendBox messages={(value) => handleclick(value)} />
    </MainDiv>
  );
};
export default Chatbox;
