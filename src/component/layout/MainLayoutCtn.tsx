import React, { FC } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions, StyleSheet, View } from 'react-native';
import { tailwind } from '../../lib/tailwind';
import { useHeaderHeight } from '@react-navigation/stack';
import Constants from 'expo-constants';

type Props = {
    withoutDrawer?: boolean;
};
const MainLayoutCtn: FC<Props> = ({ children, withoutDrawer }) => {
    const headerHeight = useHeaderHeight();
    return (
        <View style={[tailwind('flex-1'), { paddingTop: Constants.statusBarHeight }]}>
            <LinearGradient colors={['#15203D', '#0D061E']} style={styles.background} />
            {withoutDrawer ? (
                <View
                    style={[
                        tailwind('p-2'),
                        {
                            paddingTop: headerHeight,
                        },
                    ]}
                >
                    {children}
                </View>
            ) : (
                children
            )}
        </View>
    );
};

MainLayoutCtn.defaultProps = {
    withoutDrawer: false,
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
