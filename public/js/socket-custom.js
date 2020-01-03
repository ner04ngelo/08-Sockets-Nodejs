var socket = io();

// On Escucha eventos o informacion
socket.on('connect', function() {
    console.log('conectado al servidor');
});


socket.on('disconnect', function() {
    console.log('Se perdió la conexión con el servidor');
});

// Emit son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Jasson',
    mensaje: 'Hola mundo'
}, function() {
    console.log('Se disparó el callback');
});


socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});