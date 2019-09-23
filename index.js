const { GraphQLServer }  = require('graphql-yoga');
const resolvers = require('./modules/resolvers');






const server = new GraphQLServer({
    typeDefs: './schema/schema.graphql',
    resolvers
});

const options = {
    port: process.env.PORT || 4000,
    endpoint: '/graphql',
    playground: '/playground',
};
server.start(options, ({ port }) => console.log(`Server is running on port ${port}`));
