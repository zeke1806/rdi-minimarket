import { FetchResult, gql, MutationFunctionOptions, useMutation } from '@apollo/client';
import { FormikValues, useFormik } from 'formik';

import { CATEGORY_FRAG } from '../../lib/apollo/fragment';
import { Category, CreateCategoryInput, MutationCreateCategoryArgs } from '../../lib/apollo/types';

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

const useMutationCreateCategory = (
    input: MutationCreateCategoryArgs,
): {
    createCategory: (
        options?: MutationFunctionOptions<CreateCategoryData, MutationCreateCategoryArgs>,
    ) => Promise<FetchResult<CreateCategoryData, Record<string, unknown>, Record<string, unknown>>>;
    loading: boolean;
} => {
    const [createCategory, { loading }] = useMutation<CreateCategoryData, MutationCreateCategoryArgs>(CREATE_CATEGORY, {
        variables: input,
        update: (cache, { data }): void => {
            if (!data) return;
            cache.modify({
                fields: {},
            });
        },
    });
    return {
        createCategory,
        loading,
    };
};

interface UseFormCreateCatgory {
    
}

export const useFormCreateCatgory = () => {
    const initialValues: CreateCategoryInput = {
        name: '',
    };
    return useFormik({
        initialValues,
        onSubmit: 
    });
};
