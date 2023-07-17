import mongoose from "mongoose";

const dataCollectionSchema = new mongoose.Schema({
    current_page: {
        type: Number,
        required: true,
    },

    items: {
        type: Array,
      
        required: true,
    },
    next_page: {
        type: Number,
        required: true,
    },

}) 

const dataCollection = new mongoose.model("datas", dataCollectionSchema)

export default dataCollection