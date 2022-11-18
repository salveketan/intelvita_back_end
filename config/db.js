const mongoose = require("mongoose");

mongoose.connect("mongodb://ketan:ketan123@ac-gafyamr-shard-00-00.qtuhj5u.mongodb.net:27017,ac-gafyamr-shard-00-01.qtuhj5u.mongodb.net:27017,ac-gafyamr-shard-00-02.qtuhj5u.mongodb.net:27017/?ssl=true&replicaSet=atlas-wkldki-shard-0&authSource=admin&retryWrites=true&w=majority").then(() => {
    console.log("data base connected");
}).catch(() => {
    console.log("data base not connected");
})


// mongodb + srv://ketan:<password>@cluster0.qtuhj5u.mongodb.net/?retryWrites=true&w=majority
// mongodb://ketan:<password>@ac-gafyamr-shard-00-00.qtuhj5u.mongodb.net:27017,ac-gafyamr-shard-00-01.qtuhj5u.mongodb.net:27017,ac-gafyamr-shard-00-02.qtuhj5u.mongodb.net:27017/?ssl=true&replicaSet=atlas-wkldki-shard-0&authSource=admin&retryWrites=true&w=majority