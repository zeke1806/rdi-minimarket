import React, { FC } from 'react';
import { View } from 'react-native';
import { tailwind } from '../../lib/tailwind';
import { styles } from '../../styles';

const ListItemCtn: FC = ({ children }) => {
    return (
        <View style={[styles.shadow, tailwind('p-4 rounded-md flex-row items-center bg-primary mb-4')]}>
            {children}
        </View>
    );
};

export default ListItemCtn;
