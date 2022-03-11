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
  
}

function index(req, res) {
  Team.find({}).then(teams => {
  res.render('teams/index', {
    title: "All Teams",
    teams
    })
  })
 
}

function show(req, res) {
  Team.findById(req.params.id)
  .populate({ path: 'GK LCB RCB CB LDM RDM CAM LM RM LS RS Captain'})
  .then(team => {
    res.render('teams/show', {
      title: 'Team Detail',
      team,
    })
  })
  
 
}

function deleteTeam(req, res) {
  Team.findByIdAndDelete(req.params.id).then(team =>{
    res.redirect("/teams")
  })
  
}


async function edit (req, res) {
  const team = await Team.findById(req.params.id)
  const players = await Player.find({})
  res.render('teams/edit', {
    title: "Edit Team",
    team,
    players
  })
  
}

function update(req, res) {
  Team.findByIdAndUpdate(req.params.id, req.body).then(team => {
    res.redirect(`/teams/${team._id}`)
  })
 

}



export {
  newTeam as new,
  create,
  index,
  show,
  deleteTeam as delete,
  edit,
  update
}