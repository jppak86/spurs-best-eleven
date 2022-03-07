import { Router } from "express";
import * as playerCtrl from '../controllers/players.js'
import * as teamCtrl from '../controllers/teams.js'

const router = Router()

router.get('/new', teamCtrl.new, playerCtrl.new)

export {
  router
}