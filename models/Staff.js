const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
name:{
    type: String,
    required: true
},

email:{
    type: String,
    required: true
},

area:{
    type: String,
    required: true
},

status:{
    type: String,
    default:""
},

role:{
    type:String,
    default:"S"
},

password:{
    type: String,
    required: true
},

date:{
    type: Date,
    default:Date.now
}

});
const User = mongoose.model('staff', UserSchema);
module.exports = User