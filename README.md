# APIExample
RestAPI and GraphQL example


How to Run

Install dependencies:
 
npm install express apollo-server typescript ts-node @types/express

Compile & Run:

REST:npx ts-node rest-api/server.ts

filter with author
http://localhost:3001/books?author=Huxley



GraphQL:npx ts-node graphql-api/server.ts

filter with title = 1984

query Books {
    books(title: "1984") {
        id
        title
        author
    }
}