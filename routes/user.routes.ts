import { Router } from "express";
import { adapt } from "../adapter/expressRouter";
import CreateUserController from "../controllers/createUser";

const createUserController = new CreateUserController();
const router = Router()

router.post('/', adapt(createUserController));

export default router;