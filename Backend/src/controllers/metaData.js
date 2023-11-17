const metaData=require('../models/metaData')
const mongoose = require("mongoose");


// const insertmetaData=async(req,res)=>{
//   try {

//     const validationResult = metaData.validate(req.body);
// if (validationResult.error) {
//   console.log('Validation Error:', validationResult.error.message);
//   return res.status(400).json({ error: 'Validation failed' });
// }
//     const {
//       image_details: {
//         filename,
//         timestamp,
//         location: { latitude, longitude },
//       },
//       ai_output: {
//         class_labels,
//         probabilities,
//         num_signs_detected,
//       },
//     }=req.body

//     const document={
//         _id: new mongoose.Types.ObjectId(),
//       image_details: {
//         filename,
//         timestamp,
//         location: { latitude, longitude },
//       },
//       ai_output: {
//         class_labels,
//         probabilities,
//         num_signs_detected,
//       },
//     }

//     await metaData.create(document)
//     return res.status(201).json({ message: 'metaData added successfully', metaData:document });
   
//   } catch (error){
//       console.log("err",error)
//   }
// }
const insertmetaData = async (req, res) => {
  try {
    const validationResult = metaData.validate(req.body);
    if (validationResult.error) {
      console.log('Validation Error:', validationResult.error.message);
      return res.status(400).json({ error: 'Validation failed' });
    }

    const {
      image_details: { filename, timestamp, location },
      ai_output: { class_labels, probabilities, num_signs_detected },
    } = req.body;

    const document = {
      _id: new mongoose.Types.ObjectId(),
      image_details: {
        filename,
        timestamp,
        location: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
      },
      ai_output: {
        class_labels,
        probabilities,
        num_signs_detected,
      },
    };

    await metaData.create(document);
    return res.status(201).json({ message: 'metaData added successfully', metaData: document });
  } catch (error) {
    console.log('err', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const fetchmetaData = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;
    
    console.log("coordinates", latitude, longitude);

    const condition = {
      'image_details.location.latitude': latitude,
      'image_details.location.longitude': longitude,
    };

    const result = await metaData.findOne(condition);
    console.log("result", result);

    if (result) {
   
        // console.log("class labels", result.ai_output.class_labels);
        return res.status(200).send({
          message: "Document Found",
          data: {
            result
            // class_labels: result.ai_output.class_labels,
          },
        });
      
    } else {
      console.log('Document not found');
      return res.status(404).send({ message: 'Document not found' });
    }
  } catch (error) {
    console.error("Error finding document:", error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};


// const fetchmetaData = async (req, res) => {
//   try {
//     const latitude = req.body.lat;
//     const longitude = req.body.lon;

//     console.log("collection", latitude, longitude);

//     const condition = {
//       'image_details.location.latitude': latitude,
//       'image_details.location.longitude': longitude,
//     }; 

//     const result = await metaData.find(condition);
//     const temp=result[0]
//     console.log(temp,"temp")
//     if (result) {
//       console.log("result", result[0].ai_output.class_labels);
//       res.status(200).send({ message: "Document Found", temp});
//       return result[0];
      
//     } else {
//       console.log('Document not found');
//       return res.status(404).send({ message: 'Document not found' });
//     }
//   } catch (error) {
//     console.error("Error finding document:", error);
//     return res.status(500).send({ message: "Internal Server Error" });
//   }
// };

module.exports={
    fetchmetaData,
    insertmetaData
}