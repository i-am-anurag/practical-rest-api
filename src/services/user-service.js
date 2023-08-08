const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
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

    async signIn(email,plainpassword) {
        try {
            const user = await this.userRepository.getByEmail(email);
            if(!user){
                throw {message: 'Invalid credentials'};
            }
            const passwordMatch = await this.checkPassword(plainpassword,user.password);
            if (!passwordMatch )  {
                throw{message: 'Invalid credentials'};
            }
            const token = this.createToken({email: user.email, id: user.id});
            return token;   
        } catch (error) {
            console.log("Something went wrong in signin process", error);
            throw error;
        }
    }

    checkPassword(userInputPlainPassword,encryptedPassword) {
       try {
        return bcrypt.compareSync(userInputPlainPassword,encryptedPassword);
       } catch (error) {
        console.log("Something went wrong in password comparison");
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

    async getUserProfile(userId) {
        try {
            const user = await this.userRepository.getUserById(userId);
            if(!user) {
                throw error;
            }

            return user;
        } catch (error) {
            console.log("something went wrong in get user");
            throw error;   
        }
    }
}

module.exports = UserService;