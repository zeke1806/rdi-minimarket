import { gql, useLazyQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
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
    const [fetchCategories, { loading, data, fetchMore }] = useLazyQuery<CategoriesData, QueryCategoriesArgs>(
        CATEGORIES,
    );
    return {
        fetchCategories,
        loading,
        data,
        fetchMore,
    };
};

export const useCategories = () => {
    const [filter, setFilter] = useState('');
    const { fetchCategories, loading, data, fetchMore } = useQueryCategories();
    const paginationInfo = data ? data.categories.paginationInfo : null;
    const categories = data ? data.categories.data : [];

    useEffect(() => {
        fetchCategories({
            variables: {
                filterName: filter,
                pagination: {
                    take: PAGINATION_TAKE,
                },
            },
        });
    }, []);

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
        fetchCategories,
        handleChange,
        filter,
    };
};
