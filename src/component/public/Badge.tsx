import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { tailwind } from '../../lib/tailwind';

interface Props {
    text: string;
}
const Badge: FC<Props> = ({ text }) => {
    return (
        <View style={tailwind('bg-tertiary self-start py-1 px-2 rounded-xl')}>
            <Text style={tailwind('text-white text-xs font-bold')}>{text}</Text>
        </View>
    );
};

export default Badge;
