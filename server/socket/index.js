const express = require('express')
const { Server } = require('socket.io')
const http = require('http')
const getUserDetailsFromToken = require('../helpers/getUserDetailsFromToken')
const UserModel = require('../models/UserModel')

const app = express()

/**
 * 소켓통신
 */
const server = http.createServer(app)
const io = new Server(server,{
    cors:{
        origin: process.env.FRONTEND_URL,
        credentials: true
    }
})

/**
 * 소켓서버 송수신
 */
const onlineUser = new Set()

io.on('connection', async(socket)=>{
    console.log('connect user', socket.id)
    const token = socket.handshake.auth.token
    const user = await getUserDetailsFromToken(token)   //토큰을 이용하여 사용자 조회

    //방만들기
    socket.join(user?._id)
    onlineUser.add(user?._id)

    //첫 메세지 보내기
    io.emit('onlineUser',Array.from(onlineUser))
    socket.on('message-page', async(userId)=>{
        const userDetails = await UserModel.findById(userId).select('-password')
        const payload = {
            _id: userDetails?._id,
            name: userDetails?.name,
            email: userDetails?.email,
            profile_pic: userDetails?.profile_pic,
            online: onlineUser.has(userId)
        }
        socket.emit('message-user',payload)
    })

    //접속끊기
    socket.on('disconnect',()=>{
        onlineUser.delete(user?._id)
        console.log('disconnect user', socket.id)
    })
})

module.exports = {
    app,
    server
}