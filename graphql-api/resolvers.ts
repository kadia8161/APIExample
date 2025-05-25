let books = [
  { id: '1', title: '1984', author: 'Orwell' },
  { id: '2', title: 'Brave New World', author: 'Huxley' },
];

export const resolvers = {
  Query: {
    books: (_: any, args: { title: string; author: string }) => {
      return books.filter((book) => 
        // const matchTitle = args.title ? book.title.includes(args.title) : true;
        // const matchAuthor = args.author ? book.author.includes(args.author) : true;
        // return matchTitle && matchAuthor;
        (!args.title || book.title.includes(args.title)) &&
          (!args.author || book.author.includes(args.author))
      )
    },
  },
  Mutation: {
    addBook: (_: any, args: { title: string; author: string }) => {
      const newBook = { id: Date.now().toString(), ...args };
      books.push(newBook);
      return newBook;
    },
  },
};
