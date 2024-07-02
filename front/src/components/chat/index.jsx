import { useState, useEffect, useRef } from "react";
import * as S from "./styled";

const Chat = ({
  handleClickSendMessage,
  messageHistory,
  setMessageHistory,
}) => {
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageHistory]);

  return (
    <S.ChatContainer>
      <S.ChatMessages>
        {messageHistory.map((message, index) => (
          <S.ChatMessage key={index} origin={message.origin}>
            <span>{message.data}</span>
          </S.ChatMessage>
        ))}
        <div ref={messagesEndRef} />
      </S.ChatMessages>
      <S.ChatNewMessage>
        <S.Input
          placeholder="digite sua mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <S.BtnSend
          onClick={() => {
            handleClickSendMessage(message);
            setMessageHistory((prev) =>
              prev.concat({ data: message, origin: "client" })
            );
            setMessage("");
          }}
        >
          Send
        </S.BtnSend>
      </S.ChatNewMessage>
    </S.ChatContainer>
  );
};

export default Chat;
