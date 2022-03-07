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
  Player.create(req.body, function (err, player) {
    res.redirect('/players/new')
  })
  
}

export {
  newPlayer as new,
  create
}