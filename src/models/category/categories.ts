import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import { PAGINATION_TAKE } from '../../config';
import { CATEGORY_FRAG } from '../../lib/apollo/fragment';
import { Categories, QueryCategoriesArgs } from '../../lib/apollo/types';

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

export const useQueryCategories = () => {
    const { loading, data, fetchMore } = useQuery<CategoriesData, QueryCategoriesArgs>(CATEGORIES, {
        variables: {
            filterName: '',
            pagination: {
                take: PAGINATION_TAKE,
            },
        },
    });
    return {
        loading,
        data,
        fetchMore,
    };
};

export const useCategories = () => {
    const [filter, setFilter] = useState('');
    const { loading, data, fetchMore } = useQueryCategories();
    const paginationInfo = data ? data.categories.paginationInfo : null;
    const categories = data ? data.categories.data : [];

    const handleChange = (value: string) => setFilter(value);
    const handleFetchMore = () => {
        if (fetchMore && (paginationInfo ? categories.length < paginationInfo.total : true)) {
            fetchMore({
                variables: {
                    filterName: filter,
                    pagination: {
                        take: PAGINATION_TAKE,
                        cursor: paginationInfo && paginationInfo.cursor,
                    },
                },
            });
        }
    };

    return {
        categories,
        paginationInfo,
        handleFetchMore,
        loading,
        handleChange,
        filter,
    };
};
