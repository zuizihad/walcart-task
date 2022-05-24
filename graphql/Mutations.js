import { gql } from "@apollo/client";

export const CREATE_CATEGORY = gql`
mutation CreateCategory($category: CategoryCreateInput!) {
  createCategory(category: $category) {
    message
    statusCode
    result {
      createdAt
      inActiveNote
      isActive
      name
      parent {
        name
        uid
      }
      parents {
        name
        uid
      }
      uid
      updatedAt
    }
  }
}
`;