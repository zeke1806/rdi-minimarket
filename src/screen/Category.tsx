import { DrawerScreenProps } from '@react-navigation/drawer';
import * as React from 'react';
import MainLayout from '../component/layout/MainLayout';
import { RootDrawerParamList } from '../navigation/Drawer';
import Title from '../component/public/Titile';
import CreateCategory from '../component/category/CreateCategory';
import Space from '../component/public/Space';

type Props = DrawerScreenProps<RootDrawerParamList, 'Stock'>;

const CategoryScreen: React.FC<Props> = ({ navigation }: Props) => {
    return (
        <MainLayout navigation={navigation}>
            <Title text={'Categorie de produit'} />
            <Space />
            <CreateCategory />
        </MainLayout>
    );
};

export default CategoryScreen;
