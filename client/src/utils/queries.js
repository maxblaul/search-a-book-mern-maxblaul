import { gql } from '@apollo/client';

export const GET_ME = gql`query 
Query me {
    me {
      _id
      email
      username
      saveBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }
  `;