import React, { FC } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Category } from '../lib/apollo/types';
import { RouteProp } from '@react-navigation/native';
import CategoryScreen from '../screen/Category';
import CategoryProductScreen from '../screen/CategoryProducts';
import UpdateCategoryScreen from '../screen/UpdateCategory';

type StackParamsList = {
    category: undefined;
    category_products: {
        category: Category;
    };
    update_category: {
        category: Category;
    };
};

export type CategoryProductScreenNavigationProp = StackNavigationProp<StackParamsList, 'category_products'>;
export type CategoryProductScreenRouteProp = RouteProp<StackParamsList, 'category_products'>;
export type UpdateCategoryScreenNavigationProp = StackNavigationProp<StackParamsList, 'update_category'>;
export type UpdateCategoryScreenRouteProp = RouteProp<StackParamsList, 'update_category'>;

const Stack = createStackNavigator<StackParamsList>();

const StockNavigator: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="category" component={CategoryScreen} options={{ headerShown: false }} />
            <Stack.Screen
                name="category_products"
                component={CategoryProductScreen}
                options={({ route }) => ({
                    headerTransparent: true,
                    headerTintColor: 'white',
                    title: `Categorie ${route.params.category.name}`,
                })}
            />
            <Stack.Screen
                name="update_category"
                component={UpdateCategoryScreen}
                options={({ route }) => ({
                    headerTransparent: true,
                    headerTintColor: 'white',
                    title: `Modifier la categorie ${route.params.category.name}`,
                })}
            />
        </Stack.Navigator>
    );
};

export default StockNavigator;
