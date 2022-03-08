import { Team } from '../models/team.js'
import { Player } from '../models/player.js'

async function newTeam (req, res) {
  const teams = await Team.find({})
  const players = await Player.find({})
  res.render('teams/new', {
    title: "Add Team",
    teams,
    players
  })
}

function create (req, res) {
  Team.create(req.body).then(team => {
    res.redirect("/")
  })
}

// function newTeam(req, res) {
//   Team.find({}).then(teams => {
//     Player.find({}).then(players => {
//       res.render('teams/new', {
//             title: "Add Team",
//             teams,
//             players
//           })
//     })
//   })

  // Team.find({}, function (err, teams) {
  //   res.render('teams/new', {
  //     title: "Add Team",
  //     teams
  //   })
  // })
  // Player.find({}, function(error, players){
  //   res.render('/new', {
  //     title: 'Add Player',
  //     players,
  //   })
  // })

// }


// function newTeam(req, res) {
//   for (let key in req.body) {
//     if(req.body[key] === "") delete req.body[key]
//   }
//   Team.findById(req.params.id)
//   .populate({ path: 'GK RFB LFB CB Sweeper LMF RMF DMF AMF Central Striker', 'name')
//   .exec(function(err, team){
//     console.log(Team)
//     Player.find({_id: {$nin: [team.GK, team.RFB, team.LFB, team.CB, team.Sweeper, team.LMF, team.RMF, team.DMF, team.AMF, team.Central, team.Striker]}},
//       function(err, players){
//         res.render('teams/new', {
//           title: "Add Team",
//           players,
//           team
//         })
//     })
//   })
//   }

export {
  newTeam as new,
  create
}