import { Icon } from "@iconify/react";
import { socket } from "services/socket";
import { InputContainer, JoinChatContainer } from "./styles";

type RoomTypes = {
  username: string;
  room: string;
  setUsername: any;
  setShowChat: any;
  setRoom: any;
};

export default function RoomLogin({
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
      <Icon width={60} icon="akar-icons:people-group" />
      <h3>Live Chat App</h3>
      <InputContainer
        type="text"
        name="Nome"
        placeholder="Seu nome"
        autoFocus
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputContainer
        name="Sala"
        type="text"
        placeholder="Nome da sala"
        onChange={(e) => setRoom(e.target.value)}
      />
      <button
        onKeyPress={(e) => {
          e.key === "Enter" && joinRoom();
        }}
        onClick={joinRoom}
      >
        Entrar
      </button>
    </JoinChatContainer>
  );
}
