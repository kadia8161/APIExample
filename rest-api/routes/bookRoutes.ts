import { Router } from 'express';

const router = Router();
let books = [
    { id: '1', title: '1984', author: 'Orwell' },
    { id: '2', title: 'Brave New World', author: 'Huxley' },
];

router.get('/', (req, res) => { res.json(books) }
);

router.post('/', (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: Date.now().toString(), title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

export default router;
