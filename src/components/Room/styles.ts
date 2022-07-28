import styled from "styled-components";

export const JoinChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  button {
    width: 225px;
    height: 50px;
    margin: 7px;
    border: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 16px;
    background: #43a047;
    color: #fff;
    cursor: pointer;

    &:hover {
      background: #2e7d32;
    }
  }
`;

export const InputContainer = styled.input`
  width: 210px;
  height: 40px;
  margin: 7px;
  border: 2px solid #43a047;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
`;
