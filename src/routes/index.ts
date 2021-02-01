import { Router } from 'express';
import userRouter from './user.routes';

const router = Router();

router.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});

router.use(userRouter);

export default router;