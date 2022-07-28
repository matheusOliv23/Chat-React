import { useState } from "react";
import { useEffect } from "react";

type ChatTypes = {
  socket: SocketIOClient.Socket;
  username: string;
  room: string;
};

export default function Chat({ socket, username, room }: ChatTypes) {
  const [currentMsg, setCurrentMsg] = useState("");

  const sendMsg = async () => {
    if (currentMsg !== "") {
      const messageData = {
        room: room,
        user: username,
        message: currentMsg,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data: string) => {
      console.log(data);
    });
  }, [socket]);
  return (
    <div>
      <div className="chat-header">
        <p>Chat</p>
      </div>
      <div className="chat-body"></div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Ola"
          onChange={(e) => setCurrentMsg(e.target.value)}
        />
        <button onClick={sendMsg}>&#9658;</button>
      </div>
    </div>
  );
}
