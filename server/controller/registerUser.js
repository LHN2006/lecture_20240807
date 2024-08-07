const UserModel = require("../models/UserModel.js")

async function registerUser(req,res){
    const {name,email,password,profile_pic} = req.body
    console.log(`name:${name}`)

    //변수 var, let, const(변하지 않는 값)
    const checkEmail = await UserModel.findOne({email})
    if (checkEmail) {
        return res.status(400).json({
            message: "이미 사용되는 계정입니다."
        })
    }

    const payload = {
        name,
        email,
        password,
        profile_pic
    }
    const user = new UserModel(payload)
    const userSave = await user.save()

    return res.status(201).json({
        message: "신규회원 등록이 완료되었습니다!"
    })
}

module.exports = registerUser
