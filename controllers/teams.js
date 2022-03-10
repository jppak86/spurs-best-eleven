import { Team } from '../models/team.js'
import { Player } from '../models/player.js'
import { Profile } from '../models/profile.js'

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
  console.log(req.body)
  Team.create(req.body).then(team => {
    res.redirect("/teams")
  })
  // .catch(err => {
  //   console.log(err)
  //   res.redirect('/teams')
  // })
}

function index(req, res) {
  Team.find({}).then(teams => {
  res.render('teams/index', {
    title: "All Teams",
    teams
    })
  })
  // .catch(err => {
  // console.log(err)
  // res.redirect("/teams")
  // })
}

function show(req, res) {
  Team.findById(req.params.id)
  .populate({ path: 'GK RFB LFB CB Sweeper LMF RMF DMF AMF Central Striker Captain'})
  .then(team => {
    res.render('teams/show', {
      title: 'Team Detial',
      team,
    })
  }) 
  // .catch(err => {
  //   console.log(err)
  //   res.redirect('/teams')
  // }) 
}

function deleteTeam(req, res) {
  Team.findByIdAndDelete(req.params.id).then(team =>{
    res.redirect("/teams")
  })
  // .catch(err => {
  //   console.log(err)
  //   res.redirect('/teams')
  // })
}


async function edit (req, res) {
  const team = await Team.findById(req.params.id)
  const players = await Player.find({})
  res.render('teams/edit', {
    title: "Edit Team",
    team,
    players
  })
  // .catch(err => {
  //   console.log(err)
  //   res.redirect('/teams')
  // })
}

function update(req, res) {
  Team.findByIdAndUpdate(req.params.id, req.body).then(team => {
    res.redirect(`/teams/${team._id}`)
  })
  // .catch(err => {
  //   console.log(err)
  //   res.redirect(`/teams`)
  // })

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
  create,
  index,
  show,
  deleteTeam as delete,
  edit,
  update,
}