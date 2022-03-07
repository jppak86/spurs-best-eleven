import { Player } from '../models/player.js'
import { Team } from '../models/team.js'

function newPlayer(req, res) {
  Player.populate('team')
  Team.find({}, function (error, teams) {
    res.render("palyers/new", {
      teams,
      title: 'ADD Player',
  })
    })
  }


export {
  newPlayer as new,
}