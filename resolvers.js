const FoodsModel = require('./models/Foods')

module.exports = { 
    Query: {
        getAllFoods: async () => await FoodsModel.find({})
    }
}