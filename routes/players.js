import { Router } from "express";
import * as playerCtrl from '../controllers/players.js'


const router = Router()

router.get('/new', playerCtrl.new)
router.post('/', playerCtrl.create)

export {
  router
}