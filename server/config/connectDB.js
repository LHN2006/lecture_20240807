const mongoose = require('mongoose')

async function connectDB(){
    //몽구스 라이브러리를 통해 제작한 몽고 = DB 연결
    await mongoose.connect(process.env.MONGODB_URL)
}

module.exports = connectDB