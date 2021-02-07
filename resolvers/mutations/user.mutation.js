const User = require('../../models/User');
const config = require('config');

module.exports = {
    signup: async (_, { input: { login, password } }, context) => {
        await User.signUp(login, password);
        context.res.statusCode = 201;
        return { message: 'User is creted' };
    },

    signin: async (_, { input: { login, password } }, context) => {
        const token = await User.signIn(login, password);
        const { res } = context;
        res.cookie('authcookie', token, { maxAge: config.get('ttlMs') });
        return { message: 'Successfully authorized' };
    }
};