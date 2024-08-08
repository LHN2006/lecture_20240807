const SocketIO = require('socket.io')

module.exports = (server) => {
    const io = SocketIO(server,{
        path: "/socket.io"
    })

    io.on('connection', (socket)=>{ //소켓 연결
        socket.on('chat message',(msg)=>{   //이벤트 이름으로 전달된 메세지
            io.emit('chat message', msg)    //들어온 메세지를 송신
        })
    })
}