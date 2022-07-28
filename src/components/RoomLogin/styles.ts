import styled from "styled-components";

export const JoinChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  text-align: center;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  background-color: #252329;
  border-radius: 1rem;
  padding: 1rem;
  color: white;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  button {
    width: 100%;
    height: 70px;
    margin: 7px;
    border: none;
    margin: 2rem;
    border-radius: 5px;
    padding: 5px;
    font-size: 1.5rem;
    background: #5211a7;
    color: #fff;
    cursor: pointer;

    &:hover {
      background: #5803c7;
    }
  }
`;

export const InputContainer = styled.input`
  width: 350px;
  height: 60px;
  margin: 7px;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px;
  font-size: 28px;
  outline: none;
  background-color: #252329;
  border-bottom: 1px solid white;
`;
