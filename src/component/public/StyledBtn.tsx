import React, { FC, ReactElement } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { tailwind } from '../../lib/tailwind';

interface SubmitBtnProps {
    onPress: () => void;
    disabled?: boolean;
    label: string;
}
export const SubmitBtn: FC<SubmitBtnProps> = ({ onPress, disabled, label }) => {
    return (
        <TouchableOpacity
            style={[
                tailwind('self-start py-2 px-6 rounded-md relative'),
                disabled ? tailwind('bg-gray-500') : tailwind('bg-tertiary '),
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text style={tailwind('text-white')}>{label}</Text>
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
    text?: string;
}
export const IconBtn: FC<IconBtnProps> = ({ onPress, circle, disabled, text, icon: Icon }) => {
    return (
        <TouchableOpacity
            style={[
                tailwind(`self-start p-3 relative ${circle ? 'rounded-full' : 'rounded-md'}`),
                disabled ? tailwind('bg-gray-500') : tailwind('bg-tertiary '),
                tailwind('items-center'),
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            {Icon}
            {text && <Text style={tailwind('text-white')}>{text}</Text>}
        </TouchableOpacity>
    );
};
