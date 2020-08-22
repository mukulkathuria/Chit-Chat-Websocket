import React from "react";
import {
  MainMessage,
  GroupDiv,
  UserDiv,
  MessageDiv,
} from "./message.style";

interface Message {
  user: string;
  message: string;
  date: string;
}
interface UserInfo {
  displayName: string;
  email: string;
}
interface Props {
  message: Message;
  user: UserInfo;
}
const Message: React.FC<Props> = ({
  user,
  message: { user: name, message },
}) => {
  let currentUser = user.displayName === name;
  return (
    <MainMessage user={currentUser}>
      <GroupDiv user={currentUser}>
        <UserDiv>{name}</UserDiv>
        <MessageDiv>{message}</MessageDiv>
      </GroupDiv>
    </MainMessage>
  );
};
export default Message;
