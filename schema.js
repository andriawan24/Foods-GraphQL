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
        getFoods(_id: ID!): Foods
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
        ): Foods!,

        deleteFood(
            _id: ID!
        ): Boolean  
    }
`

module.exports = typeDefs