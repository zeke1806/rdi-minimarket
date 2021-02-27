import React, { FC } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Alert } from 'react-native';
import { tailwind } from '../../lib/tailwind';
import { Category } from '../../lib/apollo/types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useAppDispatch } from '../../redux/store';
import { deleteCategory } from '../../redux/categorySlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { actions } from '../../redux/spinnerSlice';

const DeleteCategory: FC<{
    category: Category;
}> = ({ category }) => {
    const dispatch = useAppDispatch();
    const setVisible = () => dispatch(actions.hide());

    const handleDelCategory = () => {
        Alert.alert(
            `Supprimer la categorie ${category.name}?`,
            'La suppression entrainera celle de ses produits.',
            [
                {
                    text: 'Supprimer',
                    onPress: () => {
                        dispatch(deleteCategory(parseInt(category.id)))
                            .then(unwrapResult)
                            .then(() => {
                                setVisible();
                            });
                    },
                },
                {
                    text: 'Annuler',
                    style: 'cancel',
                },
            ],
            { cancelable: false },
        );
    };

    return (
        <TouchableOpacity containerStyle={tailwind('items-end')} onPress={handleDelCategory}>
            <Ionicons name="md-trash" size={24} color="red" />
        </TouchableOpacity>
    );
};

export default DeleteCategory;
