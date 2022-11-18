const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    name: { type: String, required: true },
    salePrice: { type: Number, required: true },
    image: { type: String, required: true },
    customerReviewCount: { type: String, required: false },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' }
},
 {
        timestamps: true,
        versionKey: false
    }
);

const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;