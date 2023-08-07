const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../config/server-config');
const UserRepository = require('../repository/user-repository');

class UserService {
    constructor(){
        this.userRepository = new UserRepository();
    }

    async create(data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the service layer");
            throw error;
        }
    }

    async createToken(user) {
        try {
            const token = await jwt.sign(user,JWT_SECRET_KEY,{expiresIn:'1d'});
            return token;   
        } catch (error) {
            console.error("something went wrong in token creation");
            throw error;
        }
    }

    verifyToken(token) {
        try {
            const response = jwt.verify(token, JWT_SECRET_KEY);
            return response;
        } catch (error) {
            console.log("Something went wrong in token validation", error);
            throw error;
        }
    }
}

module.exports = UserService;