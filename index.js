const { GraphQLServer }  = require('graphql-yoga');
const resolvers = require('./modules/resolvers');
const middlewares = require('./modules/middleware');




const server = new GraphQLServer({
    typeDefs: './schema/schema.graphql',
    resolvers,
    middlewares
});
const port = process.env.PORT || 4000;
const options = {
    port,
    endpoint: '/graphql',
    playground: '/playground',
};
server.start(options, ({ port }) => console.log(`Server is running on port ${port}`));