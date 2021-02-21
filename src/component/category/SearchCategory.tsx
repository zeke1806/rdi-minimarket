import { Ionicons } from '@expo/vector-icons';
import React, { FC } from 'react';
import { TextInput } from 'react-native';
import { tailwind } from '../../lib/tailwind';
import { IconBtn } from '../public/StyledBtn';
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
            right={<IconBtn icon={<Ionicons name="search" size={12} color="white" />} onPress={() => {}} />}
            searchResult="Resultat de la recherche 12 categories sur 24 ..."
        />
    );
};

export default SearchCategory;
