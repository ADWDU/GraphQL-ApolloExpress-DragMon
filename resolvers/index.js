const queryResolver = require('./queries/query.resolver');

const userMutationResolver = require('./mutations/user.mutation');
const balanceMutationResolver = require('./mutations/balance.mutation');
const gameMutationResolver = require('./mutations/game.mutation');

module.exports = {
    Query: {
        ...queryResolver
    },
    Mutation: {
        ...userMutationResolver,
        ...balanceMutationResolver,
        ...gameMutationResolver
    }
};