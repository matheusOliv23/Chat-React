import "./App.css";
import { useState } from "react";
import Chat from "components/Chat";
import { socket } from "services/socket";
import RoomLogin from "components/RoomLogin";

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="App">
      {!showChat ? (
        <RoomLogin
          username={username}
          setUsername={setUsername}
          room={room}
          setRoom={setRoom}
          setShowChat={setShowChat}
        />
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
