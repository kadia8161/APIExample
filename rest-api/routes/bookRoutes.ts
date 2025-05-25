import { Router } from 'express';

const router = Router();
let books = [
    { id: '1', title: '1984', author: 'Orwell' },
    { id: '2', title: 'Brave New World', author: 'Huxley' },
];


router.get('/', (req, res) => {
    res.json(books.filter((book) => 
        (!req.query.title || book.title.includes(req.query.title as string))
            &&
            (!req.query.author || book.author.includes(req.query.author as string))
    )
    );
    // const { title, author } = req.query;

    // let filteredBooks = books;

    // if (title) {
    //     filteredBooks = filteredBooks.filter(book =>
    //         book.title.toLowerCase().includes((title as string).toLowerCase())
    //     );
    // }

    // if (author) {
    //     filteredBooks = filteredBooks.filter(book =>
    //         book.author.toLowerCase().includes((author as string).toLowerCase())
    //     );
    // }

    // res.json(filteredBooks);
});

router.post('/', (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: Date.now().toString(), title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

export default router;
