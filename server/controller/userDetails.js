// 구운 쿠키를 읽어 사용자 정보 조회 프로그램
const getUserDetailsFromToken = require('../helpers/getUserDetailsFromToken')

async function userDetails(req,res) {
    try {
        const token = req.cookies.token || ""
        const user = await getUserDetailsFromToken(token)
        return res.status(200).json({
            message: "user details",
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}

module.exports = userDetails