// Almacenamiento de mensajes

const messages = [
  { autor: 'Pepe', texto: '¡Hola!, ¿como estas?' },
  { autor: 'Renata', texto: 'Que cuentan amigos?' },
  { autor: 'Jose', texto: 'Holaaaaaa!!!!' }
];

const getMessages = () => messages;

const saveMessage = mensaje => {
  messages.push(mensaje);
}

module.exports = {
  getMessages,
  saveMessage
}
