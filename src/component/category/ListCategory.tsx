import React, { FC, useEffect, useRef, useState } from 'react';
import { ListRenderItem, Text, View, Animated } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { tailwind } from '../../lib/tailwind';
import { Ionicons } from '@expo/vector-icons';
import { IconBtn } from '../public/StyledBtn';
import { Category } from '../../lib/apollo/types';
import { useNavigation } from '@react-navigation/native';
import { CategoryProductScreenNavigationProp } from '../../navigation/Stock';
import ListItemCtn from '../public/ListItemCtn';
import Space from '../public/Space';
import SearchCategory from './SearchCategory';
import CreateCategory from './CreateCategory';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import DeleteCategory from './DeleteCategory';

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

const ListItem: FC<{
    item: Category;
}> = ({ item }) => {
    const navigation = useNavigation<CategoryProductScreenNavigationProp>();

    const handlePress = () => {
        navigation.navigate('category_products', {
            category: item,
        });
    };

    return (
        <ListItemCtn>
            <TouchableOpacity containerStyle={tailwind('flex-1')} onPress={handlePress}>
                <Text style={tailwind('text-white font-bold text-lg')}>{item.name.toUpperCase()}</Text>
            </TouchableOpacity>
            <TouchableOpacity containerStyle={tailwind('flex-1 items-center')} onPress={handlePress}>
                <Text style={tailwind('text-white font-thin')}>
                    {'20'} produit{2 > 0 ? 's' : ''}
                </Text>
            </TouchableOpacity>
            <View style={tailwind('flex-1')}>
                <DeleteCategory category={item} />
            </View>
        </ListItemCtn>
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

    const renderItem: ListRenderItem<Category> = ({ item }) => <ListItem item={item} />;

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
                onScrollEndDrag={(e) => {
                    if (e.nativeEvent.contentOffset.y) {
                        fetchMoreCategory();
                    }
                }}
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
