import { Ionicons } from '@expo/vector-icons';
import React, { FC } from 'react';
import { TextInput } from 'react-native';
import { tailwind } from '../../lib/tailwind';
import StyledInput from '../public/StyledInput';

const SearchCategory: FC = () => {
    return (
        <StyledInput
            input={
                <TextInput
                    style={tailwind('text-white')}
                    placeholderTextColor="white"
                    placeholder="Rechercher une categorie de produit"
                />
            }
            right={<Ionicons name="search" size={24} color="white" />}
            searchResult="Resultat de la recherche 12 categories sur 24 ..."
        />
    );
};

export default SearchCategory;
