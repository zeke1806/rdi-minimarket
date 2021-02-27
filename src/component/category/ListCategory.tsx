import React, { FC, useEffect, useRef, useState } from 'react';
import { ListRenderItem, Text, View, Animated } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { tailwind } from '../../lib/tailwind';
import { Ionicons } from '@expo/vector-icons';
import { IconBtn } from '../public/StyledBtn';
import { Category } from '../../lib/apollo/types';
import ListItemCtn from '../public/ListItemCtn';
import Space from '../public/Space';
import SearchCategory from './SearchCategory';
import CreateCategory from './CreateCategory';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

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

interface Props {
    loading: boolean;
    data: Category[];
    total: number;
    fetchMoreCategory: () => void;
}
const ListCategory: FC<Props> = ({ loading, data, fetchMoreCategory, total }) => {
    const [offsetY, setOffsetY] = useState(0);
    const listRef = useRef<FlatList<Category>>(null);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const hideScrollBtn = offsetY < 150;
    const remainsItems = total - data.length;

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
                ListHeaderComponent={<ListHeader />}
                ListFooterComponent={<ListFooter loading={loading} />}
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
                    text={remainsItems ? `${remainsItems}` : undefined}
                    circle
                />
            </Animated.View>
        </>
    );
};

export default ListCategory;
