import mongoose from 'mongoose'

const Schema = mongoose.Schema

const teamSchema = new Schema({
  name: String,
  position: String,
  formation: String,
  GK: {type: Schema.Types.ObjectId, ref: "Player"}, 
  LFB: {type: Schema.Types.ObjectId, ref: "Player"}, 
  RFB: {type: Schema.Types.ObjectId, ref: "Player"}, 
  CB: {type: Schema.Types.ObjectId, ref: "Player"}, 
  Sweeper: {type: Schema.Types.ObjectId, ref: "Player"}, 
  LMF: {type: Schema.Types.ObjectId, ref: "Player"}, 
  DMF: {type: Schema.Types.ObjectId, ref: "Player"}, 
  RMF: {type: Schema.Types.ObjectId, ref: "Player"}, 
  AMF: {type: Schema.Types.ObjectId, ref: "Player"}, 
  Central:{type: Schema.Types.ObjectId, ref: "Player"}, 
  Striker: {type: Schema.Types.ObjectId, ref: "Player"}, 
  Captain: {type: Schema.Types.ObjectId, ref: "Player"}
})

const Team = mongoose.model('Team', teamSchema)

export {
  Team,
}