const express = require('express')
const { Server: HTTPServer } = require('http')
const { Server: SocketServer } = require('socket.io');
const { getMessages, saveMessage } = require('./models/messages');

const app = express();
const httpServer = new HTTPServer(app)
const io = new SocketServer(httpServer)

app.use(express.static('public'))


io.on('connection', socket => {
  console.log('Nuevo cliente conectado')

  const messages = getMessages()
  socket.emit('messages', messages)

  socket.on('new-message', message => {
    saveMessage(message)

    const allMessages = getMessages();
    io.sockets.emit('messages', allMessages)
  })



})


const PORT = 3000;
const conectedServer = httpServer.listen(PORT, () => {
  console.log(`Servidor HTTP con Wensockets escuchando en el puerto ${conectedServer.address().port}`)
})

conectedServer.on('error', error => console.log(`Error en es servidor: ${error}`))


