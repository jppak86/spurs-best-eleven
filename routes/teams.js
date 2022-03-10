import { Router } from "express";
import { isLoggedIn } from '../middleware/middleware.js'
import * as teamCtrl from '../controllers/teams.js'


const router = Router()

router.get('/new', teamCtrl.new)
router.post('/', isLoggedIn, teamCtrl.create)
router.get("/", teamCtrl.index)
router.get("/:id", teamCtrl.show)
router.delete("/:id", isLoggedIn, teamCtrl.delete)
router.get("/:id/edit", isLoggedIn, teamCtrl.edit)
router.put("/:id", isLoggedIn, teamCtrl.update)

router.post('/', isLoggedIn, teamCtrl.create)


export {
  router
}