import { Team } from '../models/team.js'
import { Player } from '../models/player.js'

function newTeam(req, res) {
  Team.populate('GK','LFB', 'RFB', 'CB', 'Sweeper', 'LMF', 'DMF', 'RMF', 'AMF', 'Central', 'Striker' )
  Player.find({}, function (error, players) {
    res.render("teams/new", {
      players,
      title: 'ADD Team',
  })
    })
  }

export {
  newTeam as new,
}