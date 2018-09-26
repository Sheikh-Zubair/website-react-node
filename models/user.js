const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        googleID: String,
        name: String,
        books: [String]
    }
);

mongoose.model('users', userSchema);