import React, { useCallback, useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import Chat from "./components/chat";
import * as S from "./styles/styled";
import "./styles/reset.css";

const AppClient = () => {
  //Public API that will echo messages sent to it back to the client
  const [socketUrl, setSocketUrl] = useState("ws://localhost:4000/");
  const [messageHistory, setMessageHistory] = useState([]);
  const [time, setTime] = useState("");
  const [keys, setKeys] = useState({});

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    const parsedMessage = lastMessage ? JSON.parse(lastMessage.data) : null;

    if (lastMessage && parsedMessage?.type === "message") {
      setMessageHistory((prev) => prev.concat(parsedMessage));
      console.log("messageHistory", parsedMessage);
    }
    if (lastMessage && parsedMessage?.type === "timeUpdate") {
      setTime(parsedMessage.data);
    }

    if (lastMessage && parsedMessage?.type === "outsideData") {
      setKeys(parsedMessage.data);
      console.log("outsideData", parsedMessage);
      console.log(Object.keys(keys).length)
    }
  }, [lastMessage]);

  const handleClickChangeSocketUrl = useCallback(
    () => setSocketUrl("ws://localhost:4000/"),
    []
  );

  const handleClickSendMessage = useCallback(
    (message) => sendMessage(message ? message : "Hello"),
    [sendMessage]
  );

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  return (
    <S.Main>
      <S.Title>POC WebSocket</S.Title>
      <S.ConnectionStatus>
        Status da conexão: {connectionStatus}
      </S.ConnectionStatus>
      <S.ConnectionStatus>Hora atual: {time}</S.ConnectionStatus>
      {Object.keys(keys).length &&
        Object.keys(keys).map((key) => (
          <S.ConnectionStatus>
            {key}: {keys[key]}
          </S.ConnectionStatus>
        ))}
      <Chat
        handleClickSendMessage={handleClickSendMessage}
        messageHistory={messageHistory}
        setMessageHistory={setMessageHistory}
      />
    </S.Main>
  );
};

export default AppClient;
