import { DrawerScreenProps } from '@react-navigation/drawer';
import * as React from 'react';
import MainLayout from '../component/layout/MainLayout';
import { RootDrawerParamList } from '../navigation/Drawer';
import Title from '../component/public/Titile';
import CreateCategory from '../component/category/CreateCategory';
import Space from '../component/public/Space';
import SearchCategory from '../component/category/SearchCategory';
import ListCategory from '../component/category/ListCategory';
import { useCategories } from '../models/category/categories';

type Props = DrawerScreenProps<RootDrawerParamList, 'Stock'>;

const CategoryScreen: React.FC<Props> = ({ navigation }: Props) => {
    const { categories, handleFetchMore } = useCategories();

    return (
        <MainLayout navigation={navigation}>
            <Title text={'Categorie de produit'} />
            <Space nb={2} />
            <ListCategory
                header={
                    <>
                        <CreateCategory />
                        <Space nb={2} />
                        <SearchCategory />
                        <Space nb={2} />
                    </>
                }
                data={categories}
                fetchMoreCategory={handleFetchMore}
            />
        </MainLayout>
    );
};

export default CategoryScreen;
