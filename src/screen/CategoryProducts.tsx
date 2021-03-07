import React, { FC, useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    CategoryProductScreenNavigationProp,
    CategoryProductScreenRouteProp,
    UpdateCategoryScreenNavigationProp,
} from '../navigation/Stock';
import { MaterialIcons } from '@expo/vector-icons';
import MainLayoutCtn from '../component/layout/MainLayoutCtn';
import Title from '../component/public/Titile';
import Space from '../component/public/Space';
import ProductList from '../component/category-products/ProductList';

const CategoryProductScreen: FC = () => {
    const udpateCategoryScreenNavigation = useNavigation<UpdateCategoryScreenNavigationProp>();
    const navigation = useNavigation<CategoryProductScreenNavigationProp>();
    const route = useRoute<CategoryProductScreenRouteProp>();

    const categoryProductRightSection: (props: { tintColor?: string | undefined }) => React.ReactNode = () => (
        <MaterialIcons
            name="update"
            size={24}
            color="white"
            onPress={() =>
                udpateCategoryScreenNavigation.navigate('update_category', {
                    category: route.params.category,
                })
            }
            style={{
                paddingRight: 15,
            }}
        />
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: categoryProductRightSection,
        });
    }, [navigation]);

    return (
        <MainLayoutCtn withoutDrawer>
            <Title text={`Produit de la categorie ${route.params.category.name}`} badge="20" />
            <Space nb={2} />
            <ProductList />
        </MainLayoutCtn>
    );
};

export default CategoryProductScreen;
