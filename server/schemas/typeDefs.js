const typdeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    saveBooks: [Book]!
}

type Book {
    bookId: ID
    authors: [String]
    description: String
    bookCount: Int
    savedBooks: [Book]!
}

type Auth {
    token: ID!
    user: User
}

type Query { 
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(bookId: ID!): Book
    me: User
}

type Mutation {
    login( email: String!, password: String! ): Auth
    addUser( username: String!, email: String!, password: String! ): Auth
    saveBook( bookId: ID! ): User
    removeBook(bookId: ID! ): User
}

`;

module.exports = typdeDefs;

// Defining Query and Mutation types