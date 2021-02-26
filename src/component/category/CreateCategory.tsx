/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { View, TextInput } from 'react-native';
import { tailwind } from '../../lib/tailwind';
import { CreateCategoryInput } from '../../lib/apollo/types';
import { SubmitBtn } from '../public/StyledBtn';
import { Ionicons } from '@expo/vector-icons';
import { useFormik } from 'formik';
import Space from '../public/Space';
import StyledInput from '../public/StyledInput';
import { useAppDispatch } from '../../redux/store';
import { createNewCategory } from '../../redux/categorySlice';

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
            );
        },
    });

    return (
        <View>
            <StyledInput
                input={
                    <TextInput
                        style={tailwind('text-white')}
                        placeholderTextColor="white"
                        placeholder="Ajouter une categorie"
                        value={values.name}
                        onChangeText={handleChange('name')}
                    />
                }
                right={<Ionicons name="add" size={24} color="white" />}
                error={errors.name ? true : false}
            />
            <Space />
            <View style={tailwind('self-end')}>
                <SubmitBtn onPress={handleSubmit} disabled={isSubmitting} />
            </View>
        </View>
    );
};

export default CreateCategory;
