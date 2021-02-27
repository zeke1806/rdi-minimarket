/* eslint-disable react/prop-types */
import * as React from 'react';
import { View, TouchableWithoutFeedback, Image } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../../navigation/Drawer';
import { tailwind } from '../../lib/tailwind';
import MainLayoutCtn from './MainLayoutCtn';

type Props = {
    navigation: DrawerNavigationProp<RootDrawerParamList, 'Stock' | 'Vente'>;
};

const MainLayout: React.FC<Props> = ({ children, navigation }) => {
    return (
        <MainLayoutCtn>
            <View style={tailwind('p-2')}>
                <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
                    <Image source={require('../../../assets/hamberger_menu.png')} style={{ height: 40, width: 40 }} />
                </TouchableWithoutFeedback>
            </View>
            <View style={tailwind('flex-1 p-2')}>{children}</View>
        </MainLayoutCtn>
    );
};

export default MainLayout;
