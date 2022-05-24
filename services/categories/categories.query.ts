import { gql, useQuery, useMutation } from '@apollo/client';
import { CATEGORIES } from '../../graphql/Queries';
import { CREATE_CATEGORY } from '../../graphql/Mutations';
import { CategoriesQueryResponse, CreateCategoryResponse, CreateCategoryVariables } from '../../types';

export function useCategoriesQuery() {
    return useQuery<CategoriesQueryResponse>(CATEGORIES);
}

export function useCategoryMutation() {
    return useMutation<CreateCategoryResponse, CreateCategoryVariables>(CREATE_CATEGORY);
}