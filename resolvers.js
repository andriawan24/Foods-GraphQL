const FoodsModel = require('./models/Foods')

module.exports = { 
    Query: {
        getAllFoods: async () => await FoodsModel.find({})
    },
    Mutation: {
        createFood: async (_, args) => {
            const food = new FoodsModel(args)
            await food.save()

            return food
        },

        updateFood: async (_, args) => {
            const food = await FoodsModel.findByIdAndUpdate(args._id, args, { new: true })
            return food
        }
    }
}