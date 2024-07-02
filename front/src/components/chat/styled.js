import { styled } from "goober";

export const ChatContainer = styled("section")`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 80%;
  margin: 0 auto;
  min-height: 400px;
  border-radius: 6px;
  overflow: hidden;
`;

export const ChatMessages = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 300px;
  max-height: 80%;
  gap: 10px;
  background-color: #f7ffa1;
  overflow-y: scroll;
`;

export const ChatNewMessage = styled("div")`
  display: flex;
`;

export const Input = styled("textarea")`
  width: 80%;
  height: 100px;
  padding: 10px;
  margin: 0;
  border: 1px solid #ccc;
  resize: none;
  font-size: 24px;
`;

export const BtnSend = styled("button")`
  width: 20%;
  padding: 10px;
  margin: 0;
  border: 1px solid #ccc;
  background-color: #08fe00;
  cursor: pointer;
  color: #fff;
  font-weight: bold;
  font-size: 24px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
    border: 1px solid #000;
  }
`;

export const ChatMessage = styled("p")`
  width: calc(100% - 20px);
  color: ${(props) => (props.origin !== "client" ? "#000000" : "#2196f3")};
  display: flex;
  justify-content: ${(props) =>
    props.origin === "client" ? "flex-start" : "flex-end"};
  padding: 10px;
  > span {
    width: fit-content;
    border-radius: 6px;
    background-color: #ffff;
    padding: 4px 10px;
    font-size: 24px
  }
`;
