import styled from "styled-components";

export const ChatWindow = styled.div`
  width: 300px;
  height: 420px;

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

  p {
    display: block;
    padding: 0 1em 0 2em;
    color: #fff;
    font-weight: 700;
    line-height: 45px;
  }
`;

export const ChatBody = styled.div`
  height: calc(450px - (45px + 70px));
  border: 1px solid #263238;
  background: #fff;
  position: relative;
`;

export const MessageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Message = styled.div`
  height: auto;
  padding: 10px;
  display: flex;
`;

export const MessageContent = styled.div`
  width: auto;
  height: auto;
  min-height: 40px;
  max-width: 120px;
  background-color: #43a047;
  border-radius: 5px;
  color: white;
  display: flex;
  align-items: center;
  margin-right: 5px;
  margin-left: 5px;
  padding-right: 5px;
  padding-left: 5px;
  overflow-wrap: break-word;
  word-break: break-word;
`;

export const ChatFooter = styled.div`
  height: 40px;
  border: 1px solid #263238;
  border-top: none;
  display: flex;

  input {
    height: 100%;
    flex: 85%;
    border: 0;
    padding: 0 0.7em;
    font-size: 1em;
    border-right: 1px dotted #607d8b;

    outline: none;
    font-family: "Open Sans", sans-serif;
  }

  button {
    border: 0;
    display: grid;
    place-items: center;
    cursor: pointer;
    flex: 15%;
    height: 100%;
    background: transparent;
    outline: none;
    font-size: 25px;
    color: lightgray;

    &:hover {
      color: #43a047;
    }
  }
`;
