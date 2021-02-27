import { gql } from '@apollo/client';
import { apollo } from '.';
import { CATEGORY_FRAG } from './fragment';
import {
    Categories,
    Category,
    MutationCreateCategoryArgs,
    MutationDelCategoryArgs,
    QueryCategoriesArgs,
} from './types';

// CATEGORIES

interface CategoriesData {
    categories: Categories;
}

const CATEGORIES = gql`
    query Categories($pagination: CPaginationInput!, $filterName: String!) {
        categories(pagination: $pagination, filterName: $filterName) {
            data {
                ...CategoryFrag
            }
            paginationInfo {
                total
                cursor
                more
            }
            meta {
                searchTotal
            }
        }
    }
    ${CATEGORY_FRAG}
`;

export const categories = (variables: QueryCategoriesArgs) =>
    apollo.query<CategoriesData, QueryCategoriesArgs>({
        query: CATEGORIES,
        variables,
    });

// CREATE_CATEGORY

interface CreateCategoryData {
    createCategory: Category;
}

const CREATE_CATEGORY = gql`
    mutation CreateCategory($input: CreateCategoryInput!) {
        createCategory(input: $input) {
            ...CategoryFrag
        }
    }
    ${CATEGORY_FRAG}
`;

export const createCategory = (variables: MutationCreateCategoryArgs) =>
    apollo.mutate<CreateCategoryData, MutationCreateCategoryArgs>({
        mutation: CREATE_CATEGORY,
        variables,
    });

// DEL_CATEGORY

interface DelCategoryData {
    delCategory: boolean;
}

const DEL_CATEGORY = gql`
    mutation DelCategory($id: Int!) {
        delCategory(id: $id)
    }
`;

export const delCategory = (variables: MutationDelCategoryArgs) =>
    apollo.mutate<DelCategoryData, MutationDelCategoryArgs>({
        mutation: DEL_CATEGORY,
        variables,
    });
