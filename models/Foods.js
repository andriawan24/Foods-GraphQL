const mongoose = require('mongoose')

const FoodsSchema = new mongoose.Schema({
    name: String,
    description: String,
    callories: Number,
    cook_time: Number,
    category: String
})

const Foods = mongoose.model('Foods', FoodsSchema)

module.exports = Foods;