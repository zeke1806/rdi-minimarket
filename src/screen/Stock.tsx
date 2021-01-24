import { DrawerScreenProps } from '@react-navigation/drawer';
import * as React from 'react';
import { Text } from 'react-native';
import MainLayout from '../component/layout/MainLayout';
import { RootDrawerParamList } from '../navigation/Drawer';

type Props = DrawerScreenProps<RootDrawerParamList, 'Stock'>;

const StockScreen: React.FC<Props> = ({ navigation }: Props) => {
    return (
        <MainLayout navigation={navigation}>
            <Text style={{ color: 'white' }}>Stock Screen</Text>
        </MainLayout>
    );
};

export default StockScreen;
