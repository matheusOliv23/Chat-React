import io from "socket.io-client";

//export const socket = io.connect("https://live-chat-messages.herokuapp.com/");
export const socket = io.connect("http://localhost:5000/");