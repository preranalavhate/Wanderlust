const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listeningSchema = new Schema({
    title :{ 
       type : String,
       required : true,
    },
    description : String,
    image :{
        type : String,
        default : 
            "https://unsplash.com/photos/a-couple-of-tents-sitting-on-top-of-a-lush-green-field-7NZPy5YP6oE",
        set : (v)=>
            v === ""
                ? "https://unsplash.com/photos/a-couple-of-tents-sitting-on-top-of-a-lush-green-field-7NZPy5YP6oE"
                : v,
    },
    price : Number,
    location : String,
    country : String,
});

const Listing = mongoose.model("Listing",listeningSchema);
module.exports = Listing;