import { Team } from '../models/team.js'
import { Player } from '../models/player.js'

function newTeam(req, res) {
  for (let key in req.body) {
    if(req.body[key] === "") delete req.body[key]
  }
  Team.findById(req.params.id)
  .populate('GK RFB LFB CB Sweeper LMF RMF DMF AMF Central Striker', 'name')
  .exec(function(err, team){
    console.log(Team)
    Player.find({_id: {$nin: [team.GK, team.RFB, team.LFB, team.CB, team.Sweeper, team.LMF, team.RMF, team.DMF, team.AMF, team.Central, team.Striker]}},
      function(err, players){
        res.render('teams/new', {
          title: "Add Team",
          players,
          team
        })
    })
  })
  }

export {
  newTeam as new,
}