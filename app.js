/* importar as configurações do servidor */

let app = require('./config/server');

/* parametrizar a porta de escuta */

let server = app.listen(80, () => {});

let io = require('socket.io').listen(server); //on port 80, http and websocket requisitions will be received and treated

app.set('io', io); //criando a variavel io, atribuindo a instancia do meu socket.io para ela e tornando ela global
//assim eu consigo recuperar o io em controllers, rotas e etc etc etc

//server response http and tcp (websocket) on the same port

//create conection per websocket 
io.on('connection', (socket) => {
    console.log('Conectou');

    socket.on('disconnect', () => {
        console.log('disconectou');
    });

    socket.on('msgParaServidor', (data) => {
        socket.emit('msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem });
    });
});
