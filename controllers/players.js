import { Player } from '../models/player.js'

function newPlayer(req, res) {
  Player.find({}, function(error, players){
    res.render('players/new', {
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



export {
  newPlayer as new,
  create
}