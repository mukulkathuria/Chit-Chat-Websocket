import React, { useState } from "react";
import { Inputs, SuccesBtn } from "./sendbox.style";

interface Props {
  messages: (value: string | string[]) => void;
}

const SendBox: React.FC<Props> = ({ messages }) => {
  const [message, setMessage] = useState<string[] | string>("");

  const handleChange: (event: React.FormEvent<HTMLFormElement>) => void = (
    e
  ) => {
    e.preventDefault();
    const val: any = e.target;
    messages(message);
    setMessage("");
    val[0].value = "";
  };
  return (
    <div>
      <form onSubmit={handleChange}>
        <Inputs
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a Message"
        />
        <SuccesBtn type="submit" disabled={message.length === 0}>
          Submit
        </SuccesBtn>
      </form>
    </div>
  );
};
export default SendBox;
