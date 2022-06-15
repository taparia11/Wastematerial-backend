const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({

title:{
    type: String,
    required: true
},

description:{
    type: String,
    required: true
},

tag:{
    type: String,
    default: 'General'
},

status:{
    type: String,
    default: 'warning'
},

date:{
    type: Date,
    default:Date.now
}

});

module.exports = mongoose.model('notes', NotesSchema)