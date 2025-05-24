import express from 'express';
import bookRoutes from './routes/bookRoutes';

const app = express();
app.use(express.json());
app.use('/books', bookRoutes);

app.listen(3001, () => console.log('REST API running on http://localhost:3001'));
