import React, { FC, useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../navigation/Drawer';
import { useCategories } from '../models/category/categories';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchCategories } from '../redux/categorySlice';
import MainLayout from '../component/layout/MainLayout';
import Title from '../component/public/Titile';
import CreateCategory from '../component/category/CreateCategory';
import Space from '../component/public/Space';
import SearchCategory from '../component/category/SearchCategory';
import ListCategory from '../component/category/ListCategory';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { PAGINATION_TAKE } from '../config';

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
    const dispatch = useAppDispatch();
    const categories = useAppSelector((state) => state.category.categories);
    const { handleFetchMore, loading } = useCategories();

    useEffect(() => {
        dispatch(
            fetchCategories({
                filterName: '',
                pagination: {
                    take: PAGINATION_TAKE,
                },
            }),
        );
    }, []);

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
