import React, { useEffect } from "react";
import { MainDiv, FormDiv, ChatHead } from "./loginpage.style";
import LoginForm from "./Form/loginform";

interface Props {
  history: any;
}

const LoginPage: React.FC<Props> = ({ history }) => {
  useEffect(() => {
    document.title = "Login . Chatroom";
    return () => {
      document.title = "My Chatroom";
    };
  }, [history]);
  return (
    <MainDiv>
      <FormDiv>
        <ChatHead>Welcome to my Chat Room</ChatHead>
        <LoginForm />
      </FormDiv>
    </MainDiv>
  );
};
export default LoginPage;
