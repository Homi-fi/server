const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_TOKEN

function generateToken(payload){
    return jwt.sign(payload, secret, { expiresIn: '1h' })
}



module.exports = {
    generateToken,
}