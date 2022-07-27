import "./App.css";
import io from "socket.io-client";
import { useState } from "react";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {};

  return (
    <div className="App">
      <h3>Entrar no chat</h3>
      <input
        type="text"
        placeholder="Seu nome"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nome da sala"
        onChange={(e) => setRoom(e.target.value)}
      />
      <button>Entrar no sala</button>
    </div>
  );
}

export default App;
