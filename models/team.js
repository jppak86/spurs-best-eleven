import mongoose from 'mongoose'

const Schema = mongoose.Schema

const teamSchema = new Schema({
  name: String,
  position: String,
  formation: String,
  GK: {type: Schema.Types.ObjectId, ref: "Player"}, 
  LCB: {type: Schema.Types.ObjectId, ref: "Player"}, 
  RCB: {type: Schema.Types.ObjectId, ref: "Player"}, 
  CB: {type: Schema.Types.ObjectId, ref: "Player"}, 
  LDM: {type: Schema.Types.ObjectId, ref: "Player"}, 
  RDM: {type: Schema.Types.ObjectId, ref: "Player"}, 
  LM: {type: Schema.Types.ObjectId, ref: "Player"}, 
  RM: {type: Schema.Types.ObjectId, ref: "Player"}, 
  CAM:{type: Schema.Types.ObjectId, ref: "Player"}, 
  LS: {type: Schema.Types.ObjectId, ref: "Player"}, 
  RS: {type: Schema.Types.ObjectId, ref: "Player"}, 
  Captain: {type: Schema.Types.ObjectId, ref: "Player"}
})

const Team = mongoose.model('Team', teamSchema)

export {
  Team,
}