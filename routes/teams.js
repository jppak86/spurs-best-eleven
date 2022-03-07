import { Router } from "express";
import * as teamCtrl from '../controllers/teams.js'


const router = Router()

router.get('/new', teamCtrl.new)

export {
  router
}