import mongoose from 'mongoose'

const Schema = mongoose.Schema

const playerSchema = new Schema({
  name: String,
  position: String,
  injury: Boolean,
  team: [{type: Schema.Types.ObjectId, ref: "Team"}]
  

})

const Player = mongoose.model('Player', playerSchema)

export {
  Player
}