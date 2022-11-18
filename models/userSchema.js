const mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: { type: "String", required: true },
    email: { type: "String", required: true },
    password: { type: "String", required: true },
    phone: { type: "String", required: true },
    address: { type: "String", required: true },
    city: { type: "String", required: true },
    state: { type: "String", required: true },
    pincode: { type: "String", required: true }
})

userSchema.pre("save", async function (next) {
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
})

userSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}


const User = mongoose.model("User", userSchema);
module.exports = User;
