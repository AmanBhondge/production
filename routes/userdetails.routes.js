import { Router } from "express";
import  authorize from "../middlewares/auth.middleware.js";


const userdetailsRouter = Router();

userdetailsRouter.get('/get',authorize);
userdetailsRouter.post('/post',authorize);
userdetailsRouter.put('/put/:id',authorize);
userdetailsRouter.patch('/patch/:id',authorize);
userdetailsRouter.delete('/delete/:id',authorize);

export default userdetailsRouter;