import mongoose from "mongoose";

const MedTechDateSchema = new mongoose.Schema({
    name: { type: String, required: true},
    numero: { type: String, required: true, unique: true},
    status: {type: String, required: true},
    obs: {type: String, require: false}
},
    { timestamps: true }
)

const MedTechDateModel = mongoose.model("medTechInfos", MedTechDateSchema)

export { MedTechDateModel }
