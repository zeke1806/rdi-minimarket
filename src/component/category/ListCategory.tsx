import React, { FC, ReactElement, ReactNode } from 'react';
import { ListRenderItem, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { tailwind } from '../../lib/tailwind';
import ListItemCtn from '../public/ListItemCtn';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
    {
        id: 1,
        name: 'ppn',
        nbProduit: 3,
    },
    {
        id: 2,
        name: 'conserve',
        nbProduit: 3,
    },
    {
        id: 3,
        name: 'conserve de luxe',
        nbProduit: 3,
    },
    {
        id: 4,
        name: 'conserve de luxe',
        nbProduit: 3,
    },
    {
        id: 5,
        name: 'conserve de luxe',
        nbProduit: 3,
    },
    {
        id: 6,
        name: 'conserve de luxe',
        nbProduit: 3,
    },
];

const ListCategory: FC = () => {
    const renderItem: ListRenderItem<typeof DATA[0]> = ({ item }) => (
        <ListItemCtn>
            <View style={tailwind('flex-1')}>
                <Text style={tailwind('text-white font-bold text-lg')}>{item.name.toUpperCase()}</Text>
            </View>
            <View style={tailwind('flex-1 items-center')}>
                <Text style={tailwind('text-white font-thin')}>
                    {item.nbProduit} produit{item.nbProduit > 0 ? 's' : ''}
                </Text>
            </View>
            <View style={tailwind('flex-1 items-end')}>
                <Ionicons name="md-trash" size={24} color="red" />
            </View>
        </ListItemCtn>
    );

    return <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id.toString()} />;
};

export default ListCategory;
