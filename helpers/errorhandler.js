function errorHandler(err, req, res, next) {
    let {
        start,
        httpStatus,
        message,
        previousError,
        stack
    } = err
/* istanbul ignore next */
    if (err.message == 'email/password not found') {
        /* istanbul ignore next */
            httpStatus = 404
            /* istanbul ignore next */
            message = err.message
            /* istanbul ignore next */
            res.status(httpStatus).json({
                message
            })

    } else if (err.code == 11000) {
        httpStatus = 400
        message = 'Email is Already Registered'
        res.status(httpStatus).json({
            message
        })
        /* istanbul ignore next */
    } else if (err.name == 'JsonWebTokenError') {
        /* istanbul ignore next */
        httpStatus = 401
        /* istanbul ignore next */
        message = "invalid token"
        /* istanbul ignore next */
        res.status(httpStatus).json({
            message
        })
/* istanbul ignore next */
    } else if (err.name == "ValidationError") {
        httpStatus = 400
        let totalError = []
        for(let key in err.errors){
            totalError.push(err.errors[key].message)
        }
        res.status(httpStatus).json({
            totalError
        })
    } else {
        /* istanbul ignore next */
        res.status(httpStatus || 500).json({
            code: httpStatus || 500,
            message,
            data: previousError,
            error: stack
        })
    }
}
module.exports = errorHandler