import React, { FC, useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../navigation/Drawer';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchCategories, fetchMoreCategories } from '../redux/categorySlice';
import { PAGINATION_TAKE } from '../config';
import MainLayout from '../component/layout/MainLayout';
import Title from '../component/public/Titile';
import Space from '../component/public/Space';
import ListCategory from '../component/category/ListCategory';

type Props = DrawerScreenProps<RootDrawerParamList, 'Stock'>;
const CategoryScreen: FC<Props> = ({ navigation }: Props) => {
    const dispatch = useAppDispatch();
    const listCategories = useAppSelector((state) => state.category.categories.data);
    const pagination = useAppSelector((state) => state.category.categories.paginationInfo);

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

    const handleFetchMore = () => {
        if (listCategories.length < pagination.total) {
            dispatch(
                fetchMoreCategories({
                    filterName: '',
                    pagination: {
                        take: PAGINATION_TAKE,
                        cursor: pagination.cursor,
                    },
                }),
            );
        }
    };

    return (
        <MainLayout navigation={navigation}>
            <Title text={'Categorie de produit'} />
            <Space nb={2} />
            <ListCategory loading={false} data={listCategories} fetchMoreCategory={handleFetchMore} />
        </MainLayout>
    );
};

export default CategoryScreen;
