import { gql } from '@apollo/client';
import { apollo } from '.';
import { CATEGORY_FRAG } from './fragment';
import { Categories, QueryCategoriesArgs } from './types';

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
                cursor
                total
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
