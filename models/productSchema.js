const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    salePrice: { type: Number, required: true },
    image: { type: String, required: true },
    customerReviewCount: { type: String, required: false },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' }
},
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("Product", productSchema);