const mongoose = require('mongoose')


const commentSchema = new mongoose.Schema({
    username: String,
    content: String,
    product_id: String,
    rating: {
        type: Number,
        default: 0
    },
    reply: Array
}, {
    timestamps: true
})


module.exports = mongoose.model('Comments', commentSchema)