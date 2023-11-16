const mongoose = require('mongoose');

const metaDataSchema = new mongoose.Schema({

  image_details:{
  filename: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
  },
},
  location: {
    type: {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
    }
  },
  ai_output: {
    type: {
      class_labels: {
        type: [String],
        required: true,
      },
      probabilities: {
        type: [Number],
        required: true,
      },
      num_signs_detected: {
        type: Number,
        required: true,
      },
    }
  },

  
});

const metaData = mongoose.model('MetaData', metaDataSchema);
module.exports=metaData;