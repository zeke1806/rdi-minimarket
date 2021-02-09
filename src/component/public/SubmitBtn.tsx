import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { tailwind } from '../../lib/tailwind';

interface Props {
    onPress: () => void;
    disabled?: boolean;
}
const SubmitBtn: FC<Props> = ({ onPress, disabled }) => {
    return (
        <TouchableOpacity
            style={[
                tailwind('self-start py-2 px-6 rounded-md relative'),
                disabled ? tailwind('bg-gray-500') : tailwind('bg-tertiary '),
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={tailwind('text-white')}>{'Ajouter'}</Text>
        </TouchableOpacity>
    );
};

SubmitBtn.defaultProps = {
    disabled: false,
};

export default SubmitBtn;
