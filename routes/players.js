import { Router } from "express";
import * as playerCtrl from '../controllers/players.js'
import { isLoggedIn } from '../middleware/middleware.js'


const router = Router()

router.get('/new', playerCtrl.new)
router.post('/', isLoggedIn, playerCtrl.create)
router.delete("/:id", isLoggedIn, playerCtrl.delete)
router.get("/:id", isLoggedIn, playerCtrl.edit)

export {
  router
}