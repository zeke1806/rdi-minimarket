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
    const dispatch = useAppDispatch();
    const total = useAppSelector((state) => state.category.categories.paginationInfo.total);
    const searchTotal = useAppSelector((state) => state.category.categories.searchTotal);
    const loading = useAppSelector((state) => state.category.fetchCategoriesState) === 'loading';
    const searchResult = searchTotal ? `Resultat de la recherche ${searchTotal} categories sur ${total} ...` : ' ';

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
            ).then(unwrapResult);
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
