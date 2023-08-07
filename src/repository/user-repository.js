const { User } = require('../models/index');

class UserRepository{
    async create(data) {
        try {
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
    
    async getByEmail(userEmail) {
        try {
            const user = await User.findOne({
                where: {email: userEmail}
            });

            console.log(user);
            return user;
        } catch (error) {
            console.log('Error in get by Email in repo', error.message);
            throw error;
        }
    }
};

module.exports = UserRepository;