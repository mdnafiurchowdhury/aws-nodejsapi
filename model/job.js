
import mongoose from "mongoose";

// then if it was unique then we could have make a model

const jobSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true

  },
  company:{
    type: String,
    required: true


  },
  location:{
    type: String,
    required: true

  },
  description:{
    type: String,
    required: true

  }
})
// here inside the database collections are table
const Job= mongoose.model("job", jobSchema);

export default Job;