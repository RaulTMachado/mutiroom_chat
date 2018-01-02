/* get server config */

let app = require('./config/server');

/* choose my port */

let server = app.listen(80, () => {});

let io = require('socket.io').listen(server); //on port 80, http and websocket requisitions will be received and treated

app.set('io', io); //createing global var io so i can get on my routes, controllers and etc

//server response http and tcp (websocket) on the same port

//create conection per websocket 
io.on('connection', (socket) => {
    console.log('Conectou');

    socket.on('disconnect', () => {
        console.log('disconectou');
    });

    socket.on('msgParaServidor', (data) => {
        socket.emit('msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem });
        socket.broadcast.emit('msgParaCliente', { apelido: data.apelido, mensagem: data.mensagem });
        console.log(data);
        //list of users
        if(parseInt(data.apelido_atualizado_dos_clientes) == 0){
            socket.emit('participantesParaCliente', { apelido: data.apelido });
            socket.broadcast.emit('participantesParaCliente', { apelido: data.apelido });
        }
    });

    
});
