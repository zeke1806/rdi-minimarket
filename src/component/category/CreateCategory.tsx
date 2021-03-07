/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { CreateCategoryInput } from '../../lib/apollo/types';
import { useFormik } from 'formik';
import { useAppDispatch } from '../../redux/store';
import { createNewCategory } from '../../redux/categorySlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { View } from 'react-native';
import FormCategory from './FormCategory';
import Title from '../public/Titile';
import Space from '../public/Space';

const CreateCategory: FC = () => {
    const dispatch = useAppDispatch();
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
            <Title text="Ajouter une categorie" />
            <Space />
            <FormCategory
                values={values}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                errors={errors}
                isSubmitting={isSubmitting}
                submitLabel="Ajouter"
            />
        </View>
    );
};

export default CreateCategory;
