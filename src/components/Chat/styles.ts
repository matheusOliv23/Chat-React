import styled from "styled-components";

interface MessageProps {
  messageStyling: boolean;
}

export const ChatWindow = styled.div`
  width: 500px;
  height: 500px;
  margin: 0 auto;
  border-radius: 2rem;
  background-color: black;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border: none;
  p {
    margin: 0;
  }
`;

export const ChatHeader = styled.div`
  height: 45px;
  border-radius: 6px;
  background: #263238;
  position: relative;
  cursor: pointer;
  background-color: #252329;

  p {
    display: block;
    padding: 0 1em 0 2em;
    color: #fff;
    font-weight: 700;
    line-height: 45px;
  }
`;

export const ChatBody = styled.div`
  height: calc(600px - (45px + 70px));
  border: 1px solid #263238;
  background: #fff;
  position: relative;

  .message-container {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    background-color: #443f49;
    color: wheat;

    &::-webkit-scrollbar {
      display: none;
    }

    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      background-color: black;
    }
    &::-webkit-scrollbar-thumb {
      background: red;
      border-radius: 10px;
    }
  }
`;

export const Message = styled.div<MessageProps>`
  height: auto;
  padding: 10px;
  display: flex;

  justify-content: ${(props) =>
    props.messageStyling ? "flex-end" : "flex-start"};

  #you {
    justify-content: flex-start;
  }

  #other {
    justify-content: flex-end;
  }

  #other .message-content {
    justify-content: flex-end;
    background-color: cornflowerblue;
  }

  #you .message-content {
    justify-content: flex-start;
  }

  #you .message-meta {
    justify-content: flex-start;
  }
`;

export const MessageContent = styled.div<MessageProps>`
  width: auto;
  height: auto;
  min-height: 40px;
  max-width: 120px;
  background-color: ${(props) =>
    props.messageStyling ? "#319212" : "#2BA9CE"};
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
  margin-left: 5px;
  padding-right: 5px;
  padding-left: 5px;
  overflow-wrap: break-word;
  word-break: break-word;
`;

export const MessageMeta = styled.div`
  display: flex;
  font-size: 12px;
`;

export const ChatFooter = styled.div`
  height: 40px;
  display: flex;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);

  input {
    height: 100%;
    flex: 85%;
    border: 0;
    padding: 0 0.7em;
    font-size: 1em;
    border-right: 1px dotted #607d8b;
    font-family: "Roboto", sans-serif;
    outline: none;
    background-color: black;
    color: white;
  }

  button {
    border: 0;
    display: grid;
    place-items: center;
    cursor: pointer;
    flex: 15%;
    height: 100%;
    background: #5803c7;
    outline: none;
    font-size: 25px;
    color: white;

    &:hover {
      color: #607d8b;
    }
  }
`;

