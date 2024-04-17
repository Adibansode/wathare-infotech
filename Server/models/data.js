const mongoose=require('mongoose')

const DataSchema = new mongoose.Schema({
    ts:String,
    machine_status:number,
    vibration:number

})

const DataModel=mongoose.model("data",DataSchema)
module.exports=DataModel