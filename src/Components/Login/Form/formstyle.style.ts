import styled from "styled-components";

export const InputDiv = styled.div`
  input {
    padding: 8px;
    font-size: 1.2em;
    width: 100%;
    background-color: #f1f1f1;
    transition: all 0.3s linear;
    outline: none;
    border: 1px solid #dddddd;
    border-radius: 5px;
    :focus {
      box-shadow: 0 0 5px rgba(81, 203, 238, 1);
      border: 1px solid rgba(81, 203, 238, 1);
    }
  }
  margin:1rem 0;
  color: red;
  font-size: 10px;
`;

export const SuccessBtn = styled.button`
  padding:12px;
  background-color:blue;
  color:white;
  cursor:pointer;
  border:none;
  border-radius:5px;
  width:100%;
  outline:none;
  :disabled{
      background-color:lightblue;
      cursor:default;
  }
`;
