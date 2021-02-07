const User = require('../../models/User');

module.exports = {
    increaseBalance: async (_, { input: { amount } }, context) => {
        const { req: { user: { userId } } } = context;
        const balance = await User.increaseBalance(userId, amount);
        return balance;
    },

    decreaseBalance: async (_, { input: { amount } }, context) => {
        const { req: { user: { userId } } } = context;
        const balance = await User.decreaseBalance(userId, amount);
        return balance;
    }
};