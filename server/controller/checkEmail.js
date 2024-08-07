const UserModel = require('../models/UserModel')

const checkEmail = async (req,res) => {
    try {
        const { email } = req.body
        const checkEmail = await UserModel.findOne({email})
        if (!checkEmail){ //회원을 못 찾은 경우 수
            return res.status(400).json({
                message: '회원을 찾지 못했습니다.',
                error: true
            })
        }
        return res.status(200).json({
            message: "어서오세요 회원님, 비번을 이용하여 로그인해주세요.",
            success: true,
            data: checkEmail
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}

module.exports = checkEmail