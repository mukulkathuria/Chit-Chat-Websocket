import React from "react";
import { MainDiv } from "./messagebox.style";
import Message from "./message/message";

interface Messag {
  user: string;
  message: string;
  date: string;
}
interface Props {
  messages: Messag[];
  user: any;
}
const MessageBox: React.FC<Props> = ({ messages, user }) => {
  return (
    <MainDiv>
      {messages.map((list, i) => (
        <Message key={i} user={user} message={list} />
      ))}
    </MainDiv>
  );
};
export default MessageBox;
