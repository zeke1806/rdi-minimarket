import React, { FC, ReactElement } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { tailwind } from '../../lib/tailwind';

interface SubmitBtnProps {
    onPress: () => void;
    disabled?: boolean;
}
export const SubmitBtn: FC<SubmitBtnProps> = ({ onPress, disabled }) => {
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

interface IconBtnProps {
    onPress: () => void;
    disabled?: boolean;
    icon: ReactElement;
    circle?: boolean;
}
export const IconBtn: FC<IconBtnProps> = ({ onPress, circle, disabled, icon: Icon }) => {
    return (
        <TouchableOpacity
            style={[
                tailwind(`self-start p-3 relative bg-tertiary bg-opacity-70 ${circle ? 'rounded-full' : 'rounded-md'}`),
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            {Icon}
        </TouchableOpacity>
    );
};
