import { Router } from "express";

// initialize it
const authRouter = Router();

authRouter.post('/sign-up', (req, res) => res.send({ title: 'sign up' }));
authRouter.post('/sign-in', (req, res) => res.send({ title: 'sign in' }));
authRouter.post('/sign-out', (req, res) => res.send({ title: 'sign out' }));

export default authRouter;
