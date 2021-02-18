import { FetchResult, gql, MutationFunctionOptions, useMutation } from '@apollo/client';
import { FormikErrors, useFormik } from 'formik';
import { FormEvent, ChangeEvent } from 'react';

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

export const useMutationCreateCategory = (): {
    createCategory: (
        options?: MutationFunctionOptions<CreateCategoryData, MutationCreateCategoryArgs>,
    ) => Promise<FetchResult<CreateCategoryData, Record<string, unknown>, Record<string, unknown>>>;
    loading: boolean;
} => {
    const [createCategory, { loading }] = useMutation<CreateCategoryData, MutationCreateCategoryArgs>(CREATE_CATEGORY);
    return {
        createCategory,
        loading,
    };
};

export const useCreateCategory = (): {
    values: CreateCategoryInput;
    handleSubmit: (e?: FormEvent<HTMLFormElement>) => void;
    handleChange: {
        (e: ChangeEvent<unknown>): void;
        <T_1 = string | ChangeEvent<unknown>>(field: T_1): T_1 extends ChangeEvent<unknown>
            ? void
            : (e: string | ChangeEvent<unknown>) => void;
    };
    loading: boolean;
    errors: FormikErrors<CreateCategoryInput>;
    isSubmitting: boolean;
} => {
    const { createCategory, loading } = useMutationCreateCategory();
    const { values, handleChange, handleSubmit, errors, isSubmitting } = useFormik({
        initialValues: {
            name: '',
        } as CreateCategoryInput,
        validate: (values): Record<string, string> => {
            const errors: Record<string, string> = {};
            if (values.name === '') errors.name = 'Le nom de la categorie est requis';
            return errors;
        },
        onSubmit: async (values, { setSubmitting, resetForm }): Promise<void> => {
            try {
                await createCategory({
                    variables: {
                        input: values,
                    },
                });
                resetForm();
            } catch (error) {
                console.error('createCategory ', error);
            } finally {
                setSubmitting(false);
            }
        },
    });

    return {
        values,
        handleSubmit,
        handleChange,
        loading,
        errors,
        isSubmitting,
    };
};
