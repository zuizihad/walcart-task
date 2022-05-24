import { gql } from "@apollo/client";

export const CATEGORIES = gql`
  query getCategories {
    getCategories(pagination:{
        limit: 100,
        skip: 0
      }) {
      message
      statusCode

      result {
        count
        categories {
          name
          uid
          inActiveNote
          isActive
          createdAt
          updatedAt
          parent {
            name
            uid
          }
          parents {
            name
            uid
          }
          
        }
      }
    }
  }
`;