import styled from "styled-components";
import bgwall from "../../assests/images/bgWall.jpg";

export const MainDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${bgwall});
  background-position:center;
  background-size:cover;
  height:100vh;
`;
export const FormDiv = styled.div`
  width: 20rem;
  display:flex;
  flex-direction:column;
`;
export const ChatHead = styled.div`
  text-align:center;
  font-size:1.4rem;
  margin:2rem 0;
`
