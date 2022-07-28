# Socket.io React Chat

![image](https://user-images.githubusercontent.com/78116908/181598694-4b4906ed-80da-46ec-baf3-9aac72aaf7a3.png)



## Sobre a aplicação



- Aplicação para chat em tempo real com o intuito de aprender e aprimorar meus conhecimentos em Reactjs e Nodejs.

- As mensagens são enviadas para um banco de dados do MongoDB


- Na aplicação, entre apenas com o nome de usuário e um nome para a sala. Desde que outros entrem na sala exata, será possivel o compartilhamento de mensagens em tempo real.


## Minhas considerações e desafios nesse teste

- Primeira vez que faço uma aplicação de chat. Confesso que achei bem divertido. É um tipo de aplicação bem interessante e sua lógica não é complicada de entender pois o Socket.io cuida de todo o envio das mensagens.
- Tive um pouco de dificuldade ao integrar o MongoDB a este projeto pois eu não sabia muito bem o que eu tinha que fazer. Fiz várias pesquisas na internet e, no final, era mais simples do que parecia. A complexidade de um chat depende muito da quantidade de features da aplicação, fiz de uma maneira mais simples sem muita complexidade.

- Um problema não foi resolvido: ao enviar uma mensagem no chat, são enviadas duas de uma vez. Mas, o MongoDb na base de dados retorna apenas uma mensagem ao inves das duas repetidas. O usuario que recebe a mensagem também recebe apenas uma. Não consegui entender o porque de duas estarem sendo enviadas ao mesmo tempo.

No final, amei desenvolver essa aplicação. Me trouxe mais uma leve experiência fullstack e mais conhecimentos.

## 🚀 Tecnologias


- [React.js](https://pt-br.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Socket.io](https://socket.io/)
- [Styled-components](https://styled-components.com/)


## 🔥 Demonstração

![mongovideo](https://user-images.githubusercontent.com/78116908/181628744-133b7416-3669-4d09-bf1c-49fa5c0a3ada.gif)

## 🔥 Instalação e execução


1. Faça um clone desse repositório e entre na pasta;
2. Rode `npm install` ou `yarn`
3. Rode `yarn start` ou `npm run start` para rodar a aplicação;



## Deploy - Veja a aplicação rodando


- [Link](https://chat-react-seven.vercel.app/)



