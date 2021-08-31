const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')

// Connection to mongodb
mongoose.connect('mongodb://localhost:27017/bwa-gql', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const server = new ApolloServer({
    typeDefs, resolvers
})

server.listen()
    .then(({ url }) => {
        console.log(`Server ready at ${url}`)
    })