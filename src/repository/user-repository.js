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

            return user;
        } catch (error) {
            console.log('Error in get by Email in repo', error.message);
            throw error;
        }
    }

    async getUserById(userId, attributes = []) {
        try {
            const userProfile = await User.findOne({
                where: { id: userId },
                attributes: attributes.length ? attributes : ['id', 'username', 'email'],
            });
    
            return userProfile;
        } catch (error) {
            console.log('Error in get by id in repo', error.message);
            throw error;
        }
    }
};

module.exports = UserRepository;