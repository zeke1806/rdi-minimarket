import React, { FC } from 'react';
import { View } from 'react-native';

interface Props {
    nb?: number;
}
const Space: FC<Props> = ({ nb }) => <View style={{ height: 10 * (nb || 1) }}></View>;

export default Space;
