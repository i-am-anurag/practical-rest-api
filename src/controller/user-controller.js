const UserService = require('../services/user-service');

const userService = new UserService();

const signUp = async (req, res) => {
    try {
        const userData = {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        };
        const response = await userService.create(userData);
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new user',
            data: response,
            err: {}
        });
    } catch (error) {
        // console.log(error);
        return res.status(500).json({
            message: error.message,
            data: {},
            success: false,
            err: error.message
        });
    }
}

const signIn = async(req,res) => {
    try {
        const { email, password } = req.body;
        const response = await userService.signIn(email,password);
        return res.status(200).json({
            success: true,
            message: 'Successfully created a new user',
            data: response,
            err: {}
        });        
    } catch (error) {
        return res.status(500).json({
            message: error.message,
            data: {},
            success: false,
            err: error.message
        });
    }
}

module.exports = {
    signUp,
    signIn,
}