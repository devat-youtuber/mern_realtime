const Comments = require('../models/commentModel')


class APIfeatures{
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    sorting(){
        this.query = this.query.sort('-createdAt')
        return this;
    }
    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 5
        const skip = (page - 1) * limit
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const commentCtrl = {
    getComments: async (req, res) => {
        try {
            const features = new APIfeatures(Comments.find({product_id: req.params.id}), req.query).sorting().paginating()
            
            const comments = await features.query

            res.json({
                status: 'success',
                result: comments.length,
                comments
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
}

module.exports = commentCtrl