const resolverFunction = require('./resolver-function');












module.exports = resolvers = {
    Query: {
        calculatePrice: async (parent, args) => {
            return await resolverFunction(args.type, args.margin, args.exchangeRate)
        }
    }
};