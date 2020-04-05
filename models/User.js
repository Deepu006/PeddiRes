const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        email:  {type: String,required: true, unique: true}, 
        password: {type: String,required: true},
        full_name:   {type: String,required: true},
        phone: {type: String,required: true},
        user_type: {type:Intl,default: 1}
    }
);

const User = mongoose.model('user',UserSchema);
module.exports = User;