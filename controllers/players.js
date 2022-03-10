import { Player } from '../models/player.js'
import { Team } from '../models/team.js'

function newPlayer(req, res) {
  Player.find({}).then(players => 
    { res.render('players/new', {
      title: 'Add Player',
      players,
      
    })
  })
}


function create(req, res) {
  req.body.injury = !!req.body.injury
  for (let key in req.body) {
    if(req.body[key] === "") delete req.body[key]
  }
  Player.create(req.body, function (err, player) {
    res.redirect('/players/new')
  })
  
}

function deletePlayer(req, res) {
  Player.findByIdAndDelete(req.params.id).then(player => {
    res.redirect("/players/new")
  })
}



export {
  newPlayer as new,
  create,
  deletePlayer as delete,
 
}