import React, { FC } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../navigation/Drawer';
import { useCategories } from '../models/category/categories';
import MainLayout from '../component/layout/MainLayout';
import Title from '../component/public/Titile';
import CreateCategory from '../component/category/CreateCategory';
import Space from '../component/public/Space';
import SearchCategory from '../component/category/SearchCategory';
import ListCategory from '../component/category/ListCategory';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ListHeader: FC = () => (
    <>
        <CreateCategory />
        <Space nb={2} />
        <SearchCategory />
        <Space nb={2} />
    </>
);

const ListFooter: FC<{ loading: boolean }> = ({ loading }) => {
    return loading ? (
        <SkeletonPlaceholder backgroundColor="#15203D" highlightColor="#0E335F">
            <SkeletonPlaceholder.Item height={60} borderRadius={5} marginBottom={15} />
            <SkeletonPlaceholder.Item height={60} borderRadius={5} />
        </SkeletonPlaceholder>
    ) : (
        <></>
    );
};

type Props = DrawerScreenProps<RootDrawerParamList, 'Stock'>;
const CategoryScreen: FC<Props> = ({ navigation }: Props) => {
    const { categories, handleFetchMore, loading } = useCategories();

    return (
        <MainLayout navigation={navigation}>
            <Title text={'Categorie de produit'} />
            <Space nb={2} />
            <ListCategory
                header={<ListHeader />}
                footer={<ListFooter loading={loading} />}
                data={categories}
                fetchMoreCategory={handleFetchMore}
            />
        </MainLayout>
    );
};

export default CategoryScreen;
