import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({ title: 'GET all subscriptions' }));
subscriptionRouter.get('/:id', (req, res) => res.send({ title: 'GET subscription details' }));

// create a subscription 
subscriptionRouter.post('/', (req, res) => res.send({ title: 'CREATE subscription' }));

// update the subscription  :id= based on specific id
subscriptionRouter.put('/:id', (req, res) => res.send({ title: 'UPDATE subscription' }));

// delete a subscription
subscriptionRouter.delete('/:id', (req, res) => res.send({ title: 'DELETE subscription' }));

// able to extract all the subscription of specific user
subscriptionRouter.get('/user/:id', (req, res) => res.send({ title: 'GET all user subscriptions' }));

// cancel a user subscription
subscriptionRouter.put('/:id/cancel', (req, res) => res.send({ title: 'CANCEL subscription' }));

// get all upcoming renewals
subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send({ title: 'GET upcoming renewals' }));



export default subscriptionRouter;
