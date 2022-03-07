import { Router } from "express";
import * as teamCtrl from '../controllers/teams.js'
import * as playerCtrl from '../controllers/players.js'

const router = Router()

router.get('/new', playerCtrl.new, teamCtrl.new)

export {
  router
}