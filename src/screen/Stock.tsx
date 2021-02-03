import { DrawerScreenProps } from '@react-navigation/drawer';
import * as React from 'react';
import { Text } from 'react-native';
import MainLayout from '../component/layout/MainLayout';
import { RootDrawerParamList } from '../navigation/Drawer';
import Title from '../component/public/Titile';
import { CreateCategory } from '../component/stock/FormCategory';
import Space from '../component/public/Space';

type Props = DrawerScreenProps<RootDrawerParamList, 'Stock'>;

const StockScreen: React.FC<Props> = ({ navigation }: Props) => {
    return (
        <MainLayout navigation={navigation}>
            <Title text={'Categorie de produit'} />
            <Space />
            <CreateCategory />
        </MainLayout>
    );
};

export default StockScreen;
