/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC } from 'react';
import { View } from 'react-native';
import { tailwind } from '../../lib/tailwind';
import Space from '../public/Space';
import { SimpleInput } from '../public/StyledInput';
import SubmitBtn from '../public/SubmitBtn';
import { Formik } from 'formik';

const CreateCategory: FC = () => {
    return (
        <Formik
            initialValues={{
                category: '',
            }}
            validate={(values) => {
                const errors: Record<string, any> = {};
                if (!values.category) errors.category = 'Le champ est requis';
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false);
                }, 2000);
                return;
            }}
        >
            {({ values, handleChange, isSubmitting, handleSubmit, errors }) => (
                <View>
                    <SimpleInput
                        value={values.category}
                        onChange={handleChange('category')}
                        error={errors.category ? true : false}
                    />
                    <Space />
                    <View style={tailwind('self-end')}>
                        <SubmitBtn onPress={handleSubmit} disabled={isSubmitting} />
                    </View>
                </View>
            )}
        </Formik>
    );
};

export default CreateCategory;
