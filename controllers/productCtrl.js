const Products = require('../models/productModel')

const productCtrl = {
    getProducts: async(req, res) => {
        try {
            const products = await Products.find()

            res.json({products})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    reviews: async(req, res) => {
        try {
            const {rating} = req.body

            if(rating && rating !== 0){
                const product = await Products.findById(req.params.id)
                if(!product) return res.status(400).json({msg: 'Product does not exist.'})

                let num = product.numReviews
                let rate = product.rating

                await Products.findOneAndUpdate({_id: req.params.id}, {
                    rating: rate + rating, numReviews: num + 1
                })

                res.json({msg: 'Update success'})

            }

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}


module.exports = productCtrl