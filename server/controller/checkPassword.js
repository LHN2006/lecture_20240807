const UserModel = require('../models/UserModel')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const checkPassword = async (req,res) => {
    try {
        const {password, userId} = req.body
        const user = await UserModel.findById(userId)
        const verifyPassword = await bcryptjs.compare(password, user.password)
        if(!verifyPassword){ //비번이 틀리면
            return res.status(400).json({
                message: '비밀번호가 틀립니다.',
                error: true
            })
        }

        // 웹브라우저에 토큰을 쿠키로 굽기
        const tokenData = {
            id: user._id,
            email: user.email
        }
        const token = await jwt.sign(tokenData, process.env.JWT_SECREAT_KEY, {expiresIn:'1d'})
        const cookieOptions = {
            http: true,
            secure: true
        }
        return res.cookie('token',token,cookieOptions).status(200).json({
            message: '로그인 성공!',
            token: token,
            success: true
        })
    }catch(error){
        return res.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}

module.exports = checkPassword