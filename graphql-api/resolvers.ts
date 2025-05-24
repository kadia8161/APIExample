let books = [
  { id: '1', title: '1984', author: 'Orwell' },
  { id: '2', title: 'Brave New World', author: 'Huxley' },
];

export const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    addBook: (_: any, args: { title: string; author: string }) => {
      const newBook = { id: Date.now().toString(), ...args };
      books.push(newBook);
      return newBook;
    },
  },
};
