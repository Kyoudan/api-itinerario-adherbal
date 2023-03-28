import { config } from 'dotenv';
import app from './app';
config();

const port = process.env.PORT || 3000;

app.listen(port, () =>
	console.log(`🔥 back-end rodando na porta: http://localhost:${port}`)
);
