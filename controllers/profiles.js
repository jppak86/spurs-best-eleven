import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
			title: "Profiles"
    })
  })
}

function show(req, res) {
  Profile.findById(req.params.id)
  .then((profile) => {
    Profile.findById(req.user.profile._id)
    .then(self => {
      const isSelf = self._id.equals(profile._id)
      res.render("profiles/show", {
        title: ` ${profile.name}'s profile`,
        profile,
        isSelf,
      })
    })
  })
}

function createTeam(req, res) {
  Profile.findById(req.user.profile._id).then(profile => {
    profile.team.push(req.body)
    profile.save()
    .then(() => {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  })
}

export {
  index,
  show,
  createTeam
}