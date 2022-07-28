import React from "react";

type ChatTypes = {
  socket: SocketIOClient.Socket;
  username: string;
  room: string;
};

export default function index({ socket, username, room }: ChatTypes) {
  return (
    <div>
      <p>Chat</p>
      <div></div>
      <div>
        <input type="text" placeholder="Ola" />
        <button>&#9658;</button>
      </div>
    </div>
  );
}
