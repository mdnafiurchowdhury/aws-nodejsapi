import Job from "../model/job.js";


// now create am object of it and save everything from the front end

 export const SaveJobData = async(request , response) =>{
  try{
    const newJob = new Job(request.body);

     await newJob.save();
     response.status(200).json({message: "All the Jobs saved successfully"});

  }
  catch(error){
    console.log(error.message);
    response.status(500).json({error: error.message});
  }

}
export const getJobData = async(request , response) =>{
  try{
   
   const getData= await Job.find({});
     response.status(200).json(getData);

  }
  catch(error){
    console.log(error.message);
    response.status(500).json({error: error.message});
  }

}
