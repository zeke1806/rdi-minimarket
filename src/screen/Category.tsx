import React, { createContext, FC, useEffect, useState } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../navigation/Drawer';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { fetchCategories } from '../redux/categorySlice';
import { PAGINATION_TAKE } from '../config';
import { FilterContext } from './Category.context';
import MainLayout from '../component/layout/MainLayout';
import Title from '../component/public/Titile';
import Space from '../component/public/Space';
import ListCategory from '../component/category/ListCategory';

type Props = DrawerScreenProps<RootDrawerParamList, 'Stock'>;
const CategoryScreen: FC<Props> = ({ navigation }: Props) => {
    const [filter, setFilter] = useState('');
    const dispatch = useAppDispatch();
    const listCategories = useAppSelector((state) => state.category.categories.data);
    const loading = useAppSelector((state) => state.category.fetchCategoriesStatus.state) === 'loading';
    const pagination = useAppSelector((state) => state.category.categories.paginationInfo);

    useEffect(() => {
        dispatch(
            fetchCategories({
                variables: {
                    filterName: '',
                    pagination: {
                        take: PAGINATION_TAKE,
                    },
                },
                mode: 'fetch',
            }),
        );
    }, []);

    const handleChangeFilter = (value: string) => {
        setFilter(value);
    };

    const handleFetchMore = () => {
        if (listCategories.length < pagination.total) {
            dispatch(
                fetchCategories({
                    variables: {
                        filterName: filter,
                        pagination: {
                            take: PAGINATION_TAKE,
                            cursor: pagination.cursor,
                        },
                    },
                    mode: 'fetch-more',
                }),
            );
        }
    };

    return (
        <FilterContext.Provider
            value={{
                filter,
                handleChangeFilter,
            }}
        >
            <MainLayout navigation={navigation}>
                <Title text={'Categorie de produit'} />
                <Space nb={2} />
                <ListCategory loading={loading} data={listCategories} fetchMoreCategory={handleFetchMore} />
            </MainLayout>
        </FilterContext.Provider>
    );
};

export default CategoryScreen;
