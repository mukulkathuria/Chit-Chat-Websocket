import React from "react";
import {
  MainMessage,
  GroupDiv,
  UserDiv,
  MessageDiv,
  Timestamp,
} from "./message.style";
import { timeCal } from "../../../../Utils/timecalculate";

interface Message {
  user: string;
  message: string;
  date: any;
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
  message: { user: name, message, date },
}) => {
  let currentUser = user.displayName === name;
  return (
    <MainMessage user={currentUser}>
      <GroupDiv user={currentUser}>
        <UserDiv>{name}</UserDiv>
        <MessageDiv>
          <div className="msg">{message}</div>
          <Timestamp>{timeCal(date)}</Timestamp>
        </MessageDiv>
      </GroupDiv>
    </MainMessage>
  );
};
export default Message;
