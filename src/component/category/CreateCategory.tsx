/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { View, TextInput } from 'react-native';
import { tailwind } from '../../lib/tailwind';
import Space from '../public/Space';
import StyledInput from '../public/StyledInput';
import { SubmitBtn } from '../public/StyledBtn';
import { Ionicons } from '@expo/vector-icons';
import { useCreateCategory } from '../../models/category/createCategory';

const CreateCategory: FC = () => {
    const { values, handleChange, handleSubmit, errors, isSubmitting } = useCreateCategory();
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
