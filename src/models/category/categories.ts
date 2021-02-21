import { gql, useLazyQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { PAGINATION_TAKE } from '../../config';
import { CATEGORY_FRAG } from '../../lib/apollo/fragment';
import { Category, CPaginationInfo, QueryCategoriesArgs } from '../../lib/apollo/types';

interface CategoriesData {
    categories: {
        data: Category[];
        paginationInfo: CPaginationInfo;
    };
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
    const handleChange = (value: string) => setFilter(value);

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

    return {
        data: data ? data.categories.data : [],
        paginationInfo: data ? data.categories.paginationInfo : null,
        fetchMore,
        loading,
        fetchCategories,
        handleChange,
        filter,
    };
};
