import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from '../screen/Category';

const Stack = createStackNavigator();

const StockNavigator: FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="category" component={CategoryScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default StockNavigator;
