import React, { FC } from 'react';
import { useHeaderHeight } from '@react-navigation/stack';
import { View } from 'react-native';
import { tailwind } from '../lib/tailwind';
import { useRoute } from '@react-navigation/native';
import { CategoryProductScreenRouteProp } from '../navigation/Stock';
import MainLayoutCtn from '../component/layout/MainLayoutCtn';
import Title from '../component/public/Titile';
import Space from '../component/public/Space';
import ProductList from '../component/category-products/ProductList';

const CategoryProductScreen: FC = () => {
    const headerHeight = useHeaderHeight();
    const route = useRoute<CategoryProductScreenRouteProp>();
    return (
        <MainLayoutCtn>
            <View
                style={[
                    tailwind('p-2'),
                    {
                        paddingTop: headerHeight,
                    },
                ]}
            >
                <Title text={`Produit de la categorie ${route.params.category.name}`} badge="20" />
                <Space nb={2} />
                <ProductList />
            </View>
        </MainLayoutCtn>
    );
};

export default CategoryProductScreen;
