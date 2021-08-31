const { gql } = require('apollo-server')

const typeDefs = gql`
    type Foods {
        _id: ID!,
        name: String!,
        description: String!,
        callories: Int!,
        cook_time: Int!,
        category: String!
    }

    type Query {
        getAllFoods: [Foods]!
    }
`

module.exports = typeDefs