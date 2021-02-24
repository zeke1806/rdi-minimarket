import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { ListRenderItem, Text, View, Animated } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { tailwind } from '../../lib/tailwind';
import ListItemCtn from '../public/ListItemCtn';
import { Ionicons } from '@expo/vector-icons';
import { IconBtn } from '../public/StyledBtn';
import { Category } from '../../lib/apollo/types';

interface Props {
    header: ReactElement;
    footer: ReactElement;
    data: Category[];
    fetchMoreCategory: () => void;
}
const ListCategory: FC<Props> = ({ header: Header, footer: Footer, data, fetchMoreCategory }) => {
    const [offsetY, setOffsetY] = useState(0);
    const listRef = useRef<FlatList<Category>>(null);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const hideScrollBtn = offsetY < 150;

    useEffect(() => {
        let toValue = 0;
        if (hideScrollBtn) {
            toValue = 0;
        } else {
            toValue = 1;
        }
        Animated.timing(fadeAnim, {
            toValue,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [fadeAnim, hideScrollBtn]);

    const renderItem: ListRenderItem<Category> = ({ item }) => (
        <ListItemCtn>
            <View style={tailwind('flex-1')}>
                <Text style={tailwind('text-white font-bold text-lg')}>{item.name.toUpperCase()}</Text>
            </View>
            <View style={tailwind('flex-1 items-center')}>
                <Text style={tailwind('text-white font-thin')}>
                    {'20'} produit{2 > 0 ? 's' : ''}
                </Text>
            </View>
            <View style={tailwind('flex-1 items-end')}>
                <Ionicons name="md-trash" size={24} color="red" />
            </View>
        </ListItemCtn>
    );

    return (
        <>
            <FlatList
                ref={listRef}
                ListHeaderComponent={Header}
                ListFooterComponent={Footer}
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                onScroll={(e) => setOffsetY(e.nativeEvent.contentOffset.y)}
                onEndReachedThreshold={0.01}
                onEndReached={() => fetchMoreCategory()}
            />
            <Animated.View
                style={[
                    tailwind('absolute bottom-1 left-0 right-0 flex flex-row justify-center'),
                    {
                        opacity: fadeAnim,
                    },
                ]}
            >
                <IconBtn
                    onPress={() => {
                        listRef.current && listRef.current.scrollToOffset({ animated: true, offset: 0 });
                    }}
                    icon={<Ionicons name="md-arrow-up" size={24} color="white" />}
                    disabled={hideScrollBtn}
                    circle
                />
            </Animated.View>
        </>
    );
};

export default ListCategory;
