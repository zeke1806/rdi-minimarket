import React, { FC, RefObject } from 'react';
import { Category, CreateCategoryInput } from '../../lib/apollo/types';
import { tailwind } from '../../lib/tailwind';
import { SCREEN_HEIGHT } from '../../config';
import { unwrapResult } from '@reduxjs/toolkit';
import { useFormik } from 'formik';
import { createNewCategory } from '../../redux/categorySlice';
import { useAppDispatch } from '../../redux/store';
import RBSheet from 'react-native-raw-bottom-sheet';
import Title from '../public/Titile';
import FormCategory from './FormCategory';
import Space from '../public/Space';
import { KeyboardAvoidingView, Platform } from 'react-native';

interface Props {
    sheetRef: RefObject<RBSheet>;
    category: Category;
}
const UpdateCategory: FC<Props> = ({ sheetRef, category }) => {
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
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <RBSheet
                ref={sheetRef}
                height={SCREEN_HEIGHT / 2}
                openDuration={250}
                customStyles={{
                    container: tailwind('bg-primary p-2 rounded-t-lg'),
                }}
            >
                <Title text={`Modifier la categorie ${category.name}`} />
                <Space nb={2} />
                <FormCategory
                    values={values}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    isSubmitting={isSubmitting}
                />
            </RBSheet>
        </KeyboardAvoidingView>
    );
};

export default UpdateCategory;
