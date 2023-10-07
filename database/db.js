
import mongoose from "mongoose";



const Connection = async() =>{
  const URL = "mongodb+srv://Nawfil:Nawfil123@job-portal.k8nih7a.mongodb.net/";
  try{
   await mongoose.connect(URL, {useUnifiedTopology : true});
    console.log('database connected succesfully');

  }catch(error){
    console.log("this is not connecting why", error.message);
  }
}
export default Connection;
