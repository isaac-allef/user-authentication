import { Router } from 'express';

const userRouter = Router();

userRouter.post('/users', (request, response) => {
    return response.json({ message: 'Here will create a user' });
});

export default userRouter;