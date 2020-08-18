# Chat - Server
[Clique aqui pra ir até o Chat-Client](https://github.com/JosueCardoso/Chat-Client)

Projeto criado para conclusão da disciplina de Programação de Sistemas Distribuídos. 

Projeto consiste no back-end de um chat utilizando Node e que utiliza para comunicação a lib Socket.IO para que seja desenvolvido meu próprio "protocolo" (requisito do trabalho).

##### Bibliotecas utilizadas no projeto:
- [Express](https://expressjs.com/pt-br/)
- [Socket.IO](https://socket.io/)

## Composição do "protocolo":

Utilizando o socket.emit() do Socket.IO, o padrão do argumento 'event' para a comunicação do client com o server é a string 'sendMessage' e um objeto como segundo argumento da função.

O objeto que é passado como segundo parâmetro é composto de acordo com a funcionalidade que está emitindo a mensagem. A primeira propriedade desse objeto é a funcionalidade em si, que define no server como deve ser tratada essa mensagem que foi emitida.

Após o server processar a mensagem emitida, ele emite uma resposta que é ouvida através da função socket.on(). A resposta também tem um 'event' como argumento, esse sendo como 'responseStatus' e uma string como segundo argumento que é composta pela resposta ou status do processamento do server.

## Eventos de comunicação:

### event: 'sendMessage'

|Protocol | Ação | Propriedades |
|---------|------|--------------|
|LOGIN    | Realizar autenticação de usuário | protocol, username, password |
|REGISTER | Realizar o registro de um novo usuário | protocol, username, password, email |
|MESSAGE  | Enviar uma mensagem no chat | protocol, username, message |

---------------------------------------------------------------------------------------

### event: 'responseStatus'

##### protocol: LOGIN

|Response | Significado |
|---------|-------------|
|USER_AUTHENTICATED | Usuário logado no chat com sucesso |
|USER_NOT_AUTHENTICATED | Não foi possível logar no chat |

##### protocol: REGISTER

|Response | Significado |
|---------|-------------|
|USER_REGISTERED | Novo usuário registrado |
|USER_NOT_REGISTERED | Não foi possível registrar o usuário |

##### protocol: MESSAGE

|Response | Significado |
|---------|-------------|
|MESSAGE_NOT_VALID | Mensagem não foi processada |
