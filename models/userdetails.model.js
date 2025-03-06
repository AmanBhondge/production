import mongoose from "mongoose"; 

const userdetailsSchema = new mongoose.Schema({ 
    name: { type: String}, 
    age: { type: Number, min: 18, max: 100}, 
    phone: { type: String, minlength: 10, maxlength: 10} 
});

const Userdetails = mongoose.model("Userdetails", userdetailsSchema); 

export default Userdetails;
