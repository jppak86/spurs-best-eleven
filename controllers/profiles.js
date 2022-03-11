import { Profile } from '../models/profile.js'
import { Team } from '../models/team.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
			title: "Profiles"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}

function show(req, res) {
  Profile.findById(req.params.id).populate("team")
  .then((profile) => {
    Profile.findById(req.user.profile._id)
    .then(self => {
      const isSelf = self._id.equals(profile._id)
        Team.find({}).then(teams => {
          res.render("profiles/show", {
            title: `${profile.name}'s profile`,
            profile,
            isSelf,
            teams,
        })
      })
      })
    })
    .catch((err) => {
      console.log(err)
      res.redirect("/")
    })
  }


function createTeam(req, res) {
  console.log(req.body)
  Profile.findById(req.user.profile._id).then(profile => {
    profile.team = req.body.team
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
.catch(err => {
  console.log(err)
  res.redirect(`/profiles/${req.user.profile._id}`)
})
}


export {
  index,
  show,
  createTeam
  
}