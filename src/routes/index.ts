import { Router } from 'express';
import userRouter from './user.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({ message: 'Hello World' });
});

routes.use(sessionsRouter);
routes.use(userRouter);

export default routes;