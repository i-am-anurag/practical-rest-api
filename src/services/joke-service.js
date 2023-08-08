const phin = require('phin');
const UserRepository = require('../repository/user-repository');
const {User} = require('../models/index')

class JokeService {
    constructor() {
        this.userRepo = new UserRepository();
    }

    async generateAndStoreJoke(userId) {
        try {
            const response = await phin({
                url: 'https://api.chucknorris.io/jokes/random',
                parse: 'json'
            });
            const jokeContent = response.body.value;
    
            const user = await this.userRepo.getUserById(userId, ['id','jokes']);
            if (user) {
                user.jokes = user.jokes || [];
                user.jokes.push(jokeContent);
                console.log(user.jokes);
                await User.update({ jokes: user.jokes }, { where: { id: userId } });
            }
            
            return jokeContent;
        } catch (error) {
            console.log(`Error while generating and storing a random Chuck Norris joke for userId`);
            throw error;
        }
    }
}

module.exports = JokeService;