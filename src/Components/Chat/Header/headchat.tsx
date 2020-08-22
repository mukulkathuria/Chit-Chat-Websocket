import React from "react";
import { withRouter } from "react-router-dom";
import { MainDiv, Container } from "./headchat.style";
import { auth } from "../../../Firebase/firebase.utils";


const HeaderChat: React.FC = () => {
  return (
    <MainDiv>
      <Container>
        <div>My Chat Room</div>
        <div  className="logout" onClick={() => {
          auth.signOut();
          localStorage.removeItem("chatroom");
          window.location.reload();
        }}>Logout</div>
      </Container>
    </MainDiv>
  );
};
export default  withRouter(HeaderChat);
