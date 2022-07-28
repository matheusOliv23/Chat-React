import React from "react";
import { useState } from "react";
import { socket } from "services/socket";
import { InputContainer, JoinChatContainer } from "./styles";

type RoomTypes = {
  username: string;
  room: string;
  setUsername: any;
  setShowChat: any;
  setRoom: any;
};

export default function Room({
  username,
  room,
  setUsername,
  setRoom,
  setShowChat,
}: RoomTypes) {
  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <JoinChatContainer>
      <h3>Entrar no chat</h3>
      <InputContainer
        type="text"
        placeholder="Seu nome"
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputContainer
        type="text"
        placeholder="Nome da sala"
        onChange={(e) => setRoom(e.target.value)}
      />
      <button onClick={joinRoom}>Entrar no sala</button>
    </JoinChatContainer>
  );
}
