import React, { FC } from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Category } from '../lib/apollo/types';
import { RouteProp } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import CategoryScreen from '../screen/Category';
import CategoryProductScreen from '../screen/CategoryProducts';

type StackParamsList = {
    category: undefined;
    category_products: {
        category: Category;
    };
};

export type CategoryProductScreenNavigationProp = StackNavigationProp<StackParamsList, 'category_products'>;
export type CategoryProductScreenRouteProp = RouteProp<StackParamsList, 'category_products'>;

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
                    // eslint-disable-next-line react/display-name
                    headerRight: () => (
                        <MaterialIcons
                            name="update"
                            size={24}
                            color="white"
                            onPress={() => console.log('press update category')}
                            style={{
                                paddingRight: 15,
                            }}
                        />
                    ),
                })}
            />
        </Stack.Navigator>
    );
};

export default StockNavigator;
