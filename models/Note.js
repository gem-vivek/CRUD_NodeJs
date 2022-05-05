const mongoose = require('mongoose');
const { alphanumeric } = require('validator/lib/alpha');

const NoteSchema = new mongoose.Schema({  
  name: {
    required: true,
    type: String
},
  email:{
      required:true,
      type: String
      
  },
  phone:{
      required:true,
      type:Number

  },

   password: {
    required: true,
    type: String
}
});
module.exports = mongoose.model('Note', NoteSchema);