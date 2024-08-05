const UserModel = require('../models/user');

class UserService {
    async signup(userDTO) {
        const userRecord = await UserModel.create(userDTO);
        const user = userRecord.toObject();
        delete user.senha;
        return { user };
    }
}

module.exports = new UserService();
