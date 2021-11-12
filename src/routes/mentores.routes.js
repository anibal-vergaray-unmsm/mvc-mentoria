import { Router } from "express";
import {
  createMentor,
  deleteMentor,
  renderMentores,
  //taskToggleDone,
  renderMentorEdit,
  editMentor,
} from "../controllers/mentores.controllers";

const router = Router();

// Render all mentores
router.get("/", renderMentores);

router.post("/mentores/add", createMentor);

//router.get("/mentores/:id/toggleDone", taskToggleDone);

router.get("/mentores/:id/edit", renderMentorEdit);

router.post("/mentores/:id/edit", editMentor);

router.get("/mentores/:id/delete", deleteMentor);

export default router;
