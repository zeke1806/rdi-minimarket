import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { tailwind } from '../../lib/tailwind';
import Badge from './Badge';

interface Props {
    text: string;
    badge?: string;
}
const Title: FC<Props> = ({ text, badge }) => {
    return (
        <View style={tailwind('relative self-start')}>
            <Text style={tailwind('text-white font-bold text-lg')}>{text}</Text>
            <View style={tailwind('absolute -top-5 -right-6')}>{badge && <Badge text={badge} />}</View>
        </View>
    );
};

export default Title;
