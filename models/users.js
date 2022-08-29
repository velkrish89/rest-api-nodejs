const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create a Schema and model for Users
const UsersSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    job: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
});

//Creating a model
const Users = mongoose.model('users', UsersSchema);

module.exports = Users;