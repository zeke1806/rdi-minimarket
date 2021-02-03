import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { tailwind } from '../../lib/tailwind';

const SubmitBtn: FC = () => {
    return (
        <TouchableOpacity style={tailwind('bg-tertiary self-start py-2 px-6 rounded-md relative')}>
            <Text style={tailwind('text-white')}>{'Ajouter'}</Text>
        </TouchableOpacity>
    );
};

export default SubmitBtn;
