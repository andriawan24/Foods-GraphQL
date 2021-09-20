const { ApolloServer } = require('apollo-server')
const mongoose = require('mongoose')

const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core') 

// Connection to mongodb
mongoose.connect('mongodb+srv://andriawan24:andriawan_24@cluster0.fjmq5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("MongoDB is connected")).catch(console.error)

const server = new ApolloServer({
    typeDefs, 
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground
    ] 
})

server.listen()
    .then(({ url }) => {
        console.log(`Server ready at ${url}`)
    }).catch(console.error)