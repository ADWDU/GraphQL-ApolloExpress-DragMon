const User = require('../../models/User');

module.exports = {
    buyCard: async (_, { input: { count } }, context) => {
        const { req: { user: { userId } } } = context;
        await User.purchaseCards(userId, count);
        return { message: 'Cards are purchased.' };
    },

    openCell: async (_, { input: { id, cell } }, context) => {
        const { req: { user: { userId } } } = context;
        await User.openCell(userId, id, cell);
        return { message: 'Cell is opened.' };
    },

    endGame: async (_, { input: { id } }, context) => {
        const { req: { user: { userId } } } = context;
        await User.endGame(userId, id);
        return { message: 'Game is ended.' };
    },
};