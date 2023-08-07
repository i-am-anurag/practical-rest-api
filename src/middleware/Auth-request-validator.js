const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config/server-config')

const validateUserAuth = (req, res, next) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({
            success: false,
            data: {},
            message: 'Something went wrong',
            err: 'Email or password missing in the request'
        });
    }
    next();
}

const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1]; // Extract token from header

    if (!token) {
        return res.status(401).json({
            success: false,
            data: {},
            message: 'Something went wrong',
            err: 'Token is missing'
        });
    }

    jwt.verify(token,JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({
                success: false,
                data: {},
                message: 'Something went wrong',
                err: err,
            });
        }
        req.user = user;
        next();
    });
}

module.exports = {
    validateUserAuth,
    authenticateToken,
}