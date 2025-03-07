import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { getUserDetails, postUserDetails, putUserDetails, patchUserDetails, deleteUserDetails } from "../controllers/userdetails.controller.js";

const userdetailsRouter = Router();

userdetailsRouter.get('/get', authorize, getUserDetails);
userdetailsRouter.post('/post', authorize, postUserDetails);
userdetailsRouter.put('/put/:id', authorize, putUserDetails);
userdetailsRouter.patch('/patch/:id', authorize, patchUserDetails);
userdetailsRouter.delete('/delete/:id', authorize, deleteUserDetails);

export default userdetailsRouter;