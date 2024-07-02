const WebSocket = require("ws");

const connectedClients = [];

function onError(ws, err) {
  console.error(`onError: ${err.message}`);
}

function onMessage(ws, data) {
  console.log(`onMessage: ${data}`);
  ws.send(JSON.stringify({ type: "message", data: "Recebido!" }));
}

function onConnection(ws, req) {
  connectedClients.push(ws);
  ws.on("message", (data) => onMessage(ws, data));
  ws.on("error", (error) => onError(ws, error));
  ws.on("close", () => {
    const index = connectedClients.indexOf(ws);
    if (index > -1) {
      connectedClients.splice(index, 1);
    }
  });
  console.log(`onConnection` + new Date().getTime());

  const intervalId = setInterval(() => {
    const now = new Date();
    const options = {
      timeZone: "America/Sao_Paulo",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "short",
    };
    const formattedTime = now.toLocaleTimeString("pt-BR", options);
    const message = {
      type: "timeUpdate",
      data: `${formattedTime} (Horário de Brasília)`,
    };
    ws.send(JSON.stringify(message));
  }, 1000);

  ws.on("close", () => {
    clearInterval(intervalId);
    console.log("Connection closed");
  });
}

module.exports = (server) => {
  const wss = new WebSocket.Server({
    server,
  });

  wss.on("connection", onConnection);

  console.log(`App Web Socket Server is running!`);
  return wss;
};

module.exports.connectedClients = connectedClients;
