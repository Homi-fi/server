const jwt = require('jsonwebtoken');
const secret = process.env.SECRET_TOKEN

function generateToken(payload){
    return jwt.sign(payload, secret, { expiresIn: '1h' })
}
/* istanbul ignore next */
function verifyToken(token){
    /* istanbul ignore next */
    return jwt.verify(token, secret)
    /* istanbul ignore next */
}

module.exports = {
    generateToken,
    /* istanbul ignore next */
    verifyToken
}