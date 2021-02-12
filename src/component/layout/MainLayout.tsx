/* eslint-disable react/prop-types */
import * as React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback, Dimensions, Image } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../../navigation/Drawer';
import { tailwind } from '../../lib/tailwind';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

type Props = {
    navigation: DrawerNavigationProp<RootDrawerParamList, 'Stock' | 'Vente'>;
};

const MainLayout: React.FC<Props> = ({ children, navigation }) => {
    return (
        <View style={[tailwind('flex-1'), { paddingTop: Constants.statusBarHeight }]}>
            <LinearGradient colors={['#15203D', '#0D061E']} style={styles.background} />
            <View style={tailwind('p-2')}>
                <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
                    <Image source={require('../../../assets/hamberger_menu.png')} style={{ height: 40, width: 40 }} />
                </TouchableWithoutFeedback>
            </View>
            <View style={tailwind('p-2')}>{children}</View>
        </View>
    );
};

export default MainLayout;

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: Dimensions.get('window').height,
    },
});
