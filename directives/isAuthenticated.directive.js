const { SchemaDirectiveVisitor, AuthenticationError } = require('apollo-server-express');
const { defaultFieldResolver } = require('graphql');

class IsAuthenticatedDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition (field) {
        const { resolve = defaultFieldResolver } = field;

        field.resolve = async function (...args) {
            const { req } = args[2];
            if (!req || !req.user) {
                const { res } = args[2];
                res.statusCode = 401;
                throw new AuthenticationError('Not authenticated');
            }

            return resolve.apply(this, args);
        };
    }
}

module.exports = IsAuthenticatedDirective;