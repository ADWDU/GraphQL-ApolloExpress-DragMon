const jwt = require('jsonwebtoken');
const config = require('config');
const { AuthenticationError } = require('apollo-server-express');

module.exports = (context) => {
    const { req } = context;
    if (req.method === 'OPTIONS') {
        return context;
    }

    try {
        const authCookie = req.cookies.authcookie;
        if (!authCookie) {
            return context;
        }

        const decoded = jwt.verify(authCookie, config.get('jwtSecret'));
        req.user = decoded;
        return context;
    } catch (e) {
        throw new AuthenticationError('Bad request');
    }
};