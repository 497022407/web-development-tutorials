const mongoose = require('./db');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: String,
    age: Number,
    city: String,
    gender: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true
})

const User = mongoose.model('user', UserSchema);

module.exports = {
    User,

}