
const fs = require('fs');
const { ApolloServer } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { constraintDirective, constraintDirectiveTypeDefs } = require('graphql-constraint-directive');

const context = require('./middleware/context.middleware');
const errorHandler = require('./middleware/errorHandler.middleware');
const authDirective = require('./directives/isAuthenticated.directive');
const resolvers = require('./resolvers');
const schema = fs.readFileSync(__dirname.concat('/schema/schema.graphql'), 'utf8');

const executableSchema = makeExecutableSchema({
    typeDefs: [constraintDirectiveTypeDefs, schema],
    schemaTransforms: [constraintDirective()],
    resolvers,
    schemaDirectives: {
        auth: authDirective,
    },
});

module.exports = new ApolloServer({
    schema: executableSchema,
    context,
    formatError: errorHandler
});