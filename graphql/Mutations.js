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

export const UPDATE_CATEGORY = gql`
  mutation Mutation($category: updateCategoryCreateInput!, $categoryUid: String!) {
  updateCategory(category: $category, categoryUid: $categoryUid) {
    message
    result {
      updatedAt
      uid
      parents {
        name
        uid
      }
      parent {
        name
        uid
      }
      name
      isActive
      inActiveNote
      image {
        name
        signedUrl
        url
      }
      createdAt
    }
    statusCode
  }
}
`;