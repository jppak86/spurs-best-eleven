import { Router } from "express";
import { isLoggedIn } from '../middleware/middleware.js'
import * as teamCtrl from '../controllers/teams.js'


const router = Router()

router.get('/new', teamCtrl.new)
router.post('/', teamCtrl.create)
router.get("/", teamCtrl.index)
router.get("/:id", teamCtrl.show)
router.delete("/:id", teamCtrl.delete)
router.get("/:id/edit", teamCtrl.edit)
router.put("/:id", teamCtrl.update)

router.post('/', isLoggedIn, teamCtrl.create)

export {
  router
}