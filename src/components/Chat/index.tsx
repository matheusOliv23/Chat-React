import { useState } from "react";
import { useEffect } from "react";
import {
  ChatBody,
  ChatFooter,
  ChatHeader,
  ChatWindow,
  Message,
  MessageContent,
  MessageMeta,
} from "./styles";
import ScrollToBottom from "react-scroll-to-bottom";

type ChatTypes = {
  socket: SocketIOClient.Socket;
  username: string;
  room: string;
};

type MessageList = {
  room: string;
  username: string;
  message: string;
  date: string;
};

export default function Chat({ socket, username, room }: ChatTypes) {
  const [currentMsg, setCurrentMsg] = useState("");
  const [messageList, setMessageList] = useState<MessageList[]>([]);

    const time = new Date();
    const getMinutesWithZero =
      (time.getMinutes() < 10 ? "0" : "") + time.getMinutes();

    const sendMsg = async () => {
      if (currentMsg !== "") {
        const messageData = {
          room: room,
          username: username,
          message: currentMsg,
          date: new Date(Date.now()).getHours() + ":" + getMinutesWithZero,
        };
        await socket.emit("send_message", messageData);     
        setMessageList((list) => [...list, messageData]);
        setCurrentMsg("");
      }
    };

    useEffect(() => {
      socket.on("receive_message", (data: MessageList) => {
        setMessageList((list) => [...list, data]);
      });
    }, [socket]);
    return (
      <ChatWindow>
        <ChatHeader>
          <p>Chat</p>
        </ChatHeader>
        <ChatBody>
          <ScrollToBottom className="message-container">
            {messageList.map((message, index) => (
              <Message
                key={index}
                messageStyling={username === message.username ? true : false}
              >
                <div>
                  <MessageContent
                    messageStyling={
                      username === message.username ? true : false
                    }
                  >
                    <p>{message.message}</p>
                  </MessageContent>
                  <MessageMeta>
                    <p>
                      Enviado às {message.date} por {message.username}
                    </p>
                  </MessageMeta>
                </div>
              </Message>
            ))}
          </ScrollToBottom>
        </ChatBody>
        <ChatFooter>
          <input
            type="text"
            autoFocus
            placeholder="Digite sua mensagem aqui "
            value={currentMsg}
            onChange={(e) => setCurrentMsg(e.target.value)}
            onKeyPress={(e) => {
              e.key === "Enter" && sendMsg();
            }}
          />
          <button onClick={sendMsg}>&#9658;</button>
        </ChatFooter>
      </ChatWindow>
    );
}
