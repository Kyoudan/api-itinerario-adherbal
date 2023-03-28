import { Router } from 'express';

const routes = Router();

routes.get('/health', (req, res) => {
	res.status(200).json({ message: 'API OK!' });
});

export default routes;
