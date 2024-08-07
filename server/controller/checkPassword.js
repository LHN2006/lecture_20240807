const UserModel = require('../models/UserModel')
const bcryptjs = require('bcryptjs')

const checkPassword = async (req,res) => {
    try {
        const {password, userId} = req.body
        const user = await UserModel.findById(userId)
        const verifypassword = await bcryptjs.compare(password, user.password)
        if(!verifypassword){    //비번이 아닌 경우
            return res.status(400).json({
                message: '비밀번호가 일치하지 않습니다.',
                error: true
            })
        }
        return res.status(200).json({
            message: '로그인 성공!',
            success: true
        })

    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}

module.exports = checkPassword