import React, { FC } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { tailwind } from '../../lib/tailwind';
import { SubmitBtn } from '../public/StyledBtn';
import { FormikErrors } from 'formik';
import { CreateCategoryInput } from '../../lib/apollo/types';
import Space from '../public/Space';
import StyledInput from '../public/StyledInput';

interface Props {
    values: {
        name: string;
    };
    handleChange: {
        (e: React.ChangeEvent<unknown>): void;
        <T_1 = string | React.ChangeEvent<unknown>>(field: T_1): T_1 extends React.ChangeEvent<unknown>
            ? void
            : (e: string | React.ChangeEvent<unknown>) => void;
    };
    errors: FormikErrors<CreateCategoryInput>;
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    isSubmitting: boolean;
    submitLabel: string;
}
const FormCategory: FC<Props> = ({ values, handleChange, errors, handleSubmit, isSubmitting, submitLabel }) => {
    return (
        <View>
            <StyledInput
                input={
                    <TextInput
                        style={tailwind('text-white')}
                        placeholderTextColor="white"
                        placeholder="Nom de la categorie"
                        value={values.name}
                        onChangeText={handleChange('name')}
                    />
                }
                error={errors.name ? true : false}
                label="Nom"
            />
            <Space />
            <View style={tailwind('self-end')}>
                <SubmitBtn onPress={handleSubmit} disabled={isSubmitting} label={submitLabel} />
            </View>
        </View>
    );
};

export default FormCategory;
