import React, { FC, useContext, useEffect, useState } from 'react';
import StyledInput from '../public/StyledInput';
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { tailwind } from '../../lib/tailwind';
import { IconBtn } from '../public/StyledBtn';
import { FilterContext } from '../../screen/Category.context';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { fetchCategories } from '../../redux/categorySlice';
import { PAGINATION_TAKE } from '../../config';
import { unwrapResult } from '@reduxjs/toolkit';

const SearchCategory: FC = () => {
    const { filter, handleChangeFilter } = useContext(FilterContext);
    const [filterMode, setFilterMode] = useState(false);
    const dispatch = useAppDispatch();
    const total = useAppSelector((state) => state.category.categories.paginationInfo.total);
    const categoryItemsNb = useAppSelector((state) => state.category.categories.data).length;
    const loading = useAppSelector((state) => state.category.fetchCategoriesStatus) === 'loading';
    const searchResult = filterMode ? `Resultat de la recherche ${categoryItemsNb} categories sur ${total} ...` : ' ';

    useEffect(() => {
        if (filter === '') {
            setFilterMode(false);
        }
    }, [filter]);

    const handleSubmit = () => {
        filter &&
            dispatch(
                fetchCategories({
                    variables: {
                        filterName: filter,
                        pagination: {
                            take: PAGINATION_TAKE,
                        },
                    },
                    mode: 'fetch',
                }),
            )
                .then(unwrapResult)
                .then(() => {
                    setFilterMode(true);
                });
    };

    return (
        <StyledInput
            input={
                <TextInput
                    style={tailwind('text-white')}
                    placeholderTextColor="white"
                    placeholder="Rechercher une categorie de produit"
                    value={filter}
                    onChangeText={handleChangeFilter}
                />
            }
            right={
                <IconBtn
                    icon={<Ionicons name="search" size={12} color="white" />}
                    onPress={handleSubmit}
                    disabled={loading}
                />
            }
            searchResult={searchResult}
        />
    );
};

export default SearchCategory;
