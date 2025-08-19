import express from 'express';

// use port coming from config
import {PORT} from './config/env.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';

// initialize app
const app = express();

// /api/v1/auth/sign-up
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

// first route call the method get  first parameter we pass is the path where this route is rechable and as second parameter we use call back function
app.get('/', (req, res)=>{
res.send('welcome to the subscription tracker API')
});

app.listen(PORT, ()=>{
    console.log(`Subscription Tracker API is running on http://localhost:${PORT}`);
});

export default app;