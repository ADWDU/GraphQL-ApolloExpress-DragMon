const User = require('../../models/User');

module.exports = {
    balance: async (_, args, { req: { user: { userId } } }) => {
        return await User.getBalance(userId);
    },
    state: async (_, args, { req: { user: { userId } } }) => {
        return await User.getState(userId);
    }
};