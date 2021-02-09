import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

import ensureAuthenticated from '../middleware/ensureAuthenticated';
import { getRepository } from 'typeorm';
import User from '../models/User';

const userRouter = Router();

userRouter.post('/users', async (request, response) => {
    try {
        const { name, email, password } = request.body;
        const createUser = new CreateUserService();

        const user = await createUser.execute({
            name,
            email,
            password,
        });

        delete user.password;

        response.json(user);
    }catch(err) {
        return response.status(err.statusCode).json({ error: err.message });
    }
});

userRouter.get('/users', ensureAuthenticated,  async (request, response) => {
    try {
        const id = request.user.id;

        const userRepository = getRepository(User);

        const user = await userRepository.findOne({ 
            where: { id }
        });

        delete user.password;

        return response.json(user);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default userRouter;