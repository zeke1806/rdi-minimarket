import React, { FC } from 'react';
import { View } from 'react-native';
import { tailwind } from '../../lib/tailwind';
import Space from '../public/Space';
import { SimpleInput } from '../public/StyledInput';
import SubmitBtn from '../public/SubmitBtn';

export const CreateCategory: FC = () => {
    return (
        <View>
            <SimpleInput />
            <Space />
            <View style={tailwind('self-end')}>
                <SubmitBtn />
            </View>
        </View>
    );
};
