import mongoose from 'mongoose'

const Schema = mongoose.Schema

const playerSchema = new Schema({
  name: String,
  position: String,
  injury: { type: Boolean, default: false}
  
  

})

const Player = mongoose.model('Player', playerSchema)

export {
  Player
}