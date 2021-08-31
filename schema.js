const { gql } = require('apollo-server')

const typeDefs = gql`
    type Foods {
        _id: ID!,
        name: String!,
        description: String,
        callories: Int!,
        cook_time: Int!,
        category: String!
    }

    type Query {
        getAllFoods: [Foods]!
    }

    type Mutation {
        createFood(
            name: String!,
            description: String,
            callories: Int!,
            cook_time: Int!,
            category: String!
        ): Foods!,

        updateFood(
            _id: ID!,
            name: String,
            description: String,
            callories: Int,
            cook_time: Int,
            category: String
        ): Foods!
    }
`

module.exports = typeDefs