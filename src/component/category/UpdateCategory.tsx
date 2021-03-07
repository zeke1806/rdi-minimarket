import React, { FC } from 'react';
import { Category, CreateCategoryInput } from '../../lib/apollo/types';
import { unwrapResult } from '@reduxjs/toolkit';
import { useFormik } from 'formik';
import { createNewCategory } from '../../redux/categorySlice';
import { useAppDispatch } from '../../redux/store';
import { View } from 'react-native';
import FormCategory from './FormCategory';

interface Props {
    category: Category;
}
const UpdateCategory: FC<Props> = ({ category }) => {
    const dispatch = useAppDispatch();
    const { values, handleChange, handleSubmit, errors, isSubmitting } = useFormik({
        initialValues: {
            name: category.name,
        } as CreateCategoryInput,
        validate: (values): Record<string, string> => {
            const errors: Record<string, string> = {};
            if (values.name === '') errors.name = 'Le nom de la categorie est requis';
            return errors;
        },
        onSubmit: async (values, { setSubmitting, resetForm }): Promise<void> => {
            dispatch(
                createNewCategory({
                    input: values,
                }),
            )
                .then(unwrapResult)
                .then(() => resetForm())
                .catch(() => {
                    //
                })
                .finally(() => setSubmitting(false));
        },
    });

    return (
        <View>
            <FormCategory
                values={values}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
                isSubmitting={isSubmitting}
                submitLabel="Modifier"
            />
        </View>
    );
};

export default UpdateCategory;
