const express = require('express')
const registerUser = require('../controller/registerUser.js')
const checkEmail = require('../controller/checkEmail.js')
const checkPassword = require('../controller/checkPassword.js')
const userDetails = require('../controller/userDetails.js')
const logout = require('../controller/logout.js')
const updateUserDetails = require('../controller/updateUserDetails.js')
const searchUser = require('../controller/searchUser.js')

const router = express()

router.get("/register",(req,res)=>{
    res.render("RegisterPage",{})
})

router.post("/register",registerUser)   //회원가입
router.post("/email",checkEmail)        //로그인(email)
router.post("/password",checkPassword)  //로그인(PW)

router.get("/user-details",userDetails) //토큰을 이용하여 사용자 정보 조회
router.get("/logout",logout)    //로그아웃

router.post("/update-user", updateUserDetails)  //사용자 이름+사진 변경
router.post("/search-user", searchUser)  //사용자 검색

module.exports = router