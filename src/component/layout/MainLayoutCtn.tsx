import React, { FC } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { tailwind } from '../../lib/tailwind';

const MainLayoutCtn: FC = ({ children }) => {
    return (
        <View style={[tailwind('flex-1'), { paddingTop: Constants.statusBarHeight }]}>
            <LinearGradient colors={['#15203D', '#0D061E']} style={styles.background} />
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: Dimensions.get('window').height,
    },
});

export default MainLayoutCtn;
