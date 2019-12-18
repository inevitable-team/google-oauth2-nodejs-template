const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    username: String,
    googleId: String,
    email: String,
    thumbnail: String,
    settings: Object
});

const User = mongoose.model('user', userSchema);

module.exports = User;
