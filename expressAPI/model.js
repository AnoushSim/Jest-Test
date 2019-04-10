const mongoose = require('./mongoose');

const UserSchema = new mongoose.Schema ({
    age: {
        type: Number,
        default: 18
    },
    name: {
        type: String,
        default: 'unknown'
    }
});

const users = mongoose.model( 'users', UserSchema);
module.exports = users;