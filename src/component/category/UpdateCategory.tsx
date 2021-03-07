import React, { FC } from 'react';
import { Category, UpdateCategoryInput } from '../../lib/apollo/types';
import { unwrapResult } from '@reduxjs/toolkit';
import { useFormik } from 'formik';
import { updateOneCategory } from '../../redux/categorySlice';
import { useAppDispatch } from '../../redux/store';
import { View } from 'react-native';
import FormCategory from './FormCategory';

interface Props {
    category: Category;
}
const UpdateCategory: FC<Props> = ({ category }) => {
    const dispatch = useAppDispatch();
    const initialValues: UpdateCategoryInput = {
        id: parseInt(category.id),
        name: category.name,
    };
    const { values, handleChange, handleSubmit, errors, isSubmitting } = useFormik({
        initialValues,
        validate: (values): Record<string, string> => {
            const errors: Record<string, string> = {};
            if (values.name === '') errors.name = 'Le nom de la categorie est requis';
            return errors;
        },
        onSubmit: async (values, { setSubmitting }): Promise<void> => {
            dispatch(
                updateOneCategory({
                    input: values,
                }),
            )
                .then(unwrapResult)
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
