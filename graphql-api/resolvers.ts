const authors = [
  { id: "a1", name: "George Orwell" },
  { id: "a2", name: "Aldous Huxley" },
];

let books = [
  { id: "1", title: "1984", authorId: "a1" },
  { id: "2", title: "Brave New World", authorId: "a2" },
];

export const resolvers = {
  Book: {
    author: (book: any) => authors.find((a) => a.id === book.authorId),
  },
  Query: {
    books: (_: any, args: { title: string; author: string }) => {
     return books.map((book) => {
        const author = authors.find((a) => a.id === book.authorId);
        return {
          ...book,
          authorName: author ? author.name : "Unknown Author",
        };
      }).filter(
      (book) =>
          (!args.title || book.title.toLowerCase().includes(args.title.toLowerCase())) &&
          (!args.author || book.authorName.toLowerCase().includes(args.author.toLowerCase()))
      );
      

      // return books.filter(
      //   (book) =>
      //     // const matchTitle = args.title ? book.title.includes(args.title) : true;
      //     // const matchAuthor = args.author ? book.author.includes(args.author) : true;
      //     // return matchTitle && matchAuthor;
      //     (!args.title || book.title.includes(args.title)) &&
      //     (!args.author || book.name.includes(args.author))
      // );
    },
  },
  Mutation: {
    addBook: (_: any, args: { title: string; authorId: string }) => {
      const newBook = { id: Date.now().toString(), ...args };
      books.push(newBook);
      return newBook;
    },
  },
};
