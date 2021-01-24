import * as React from 'react';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import VenteScreen from '../screen/Vente';
import StockScreen from '../screen/Stock';
import { Image, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { tailwind } from '../lib/tailwind';

export type RootDrawerParamList = {
    Stock: undefined;
    Vente: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

function DrawerContent(props: DrawerContentComponentProps) {
    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: '#19192D' }}>
            <View style={tailwind('flex-1 items-center justify-center my-10')}>
                <Image
                    source={require('../../assets/logo.gif')}
                    style={[{ height: 120, width: 120 }]}
                    resizeMode="contain"
                />
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const DrawerNavigator: React.FC = () => {
    type DrawerIcon = (name: 'ios-albums' | 'ios-basket') => (props: { focused: boolean }) => React.ReactNode;
    // eslint-disable-next-line react/display-name
    const drawerIcon: DrawerIcon = (name) => (props) => (
        // eslint-disable-next-line react/prop-types
        <Ionicons name={name} size={props.focused ? 30 : 24} color="white" />
    );

    return (
        <NavigationContainer>
            <Drawer.Navigator
                initialRouteName="Stock"
                drawerContentOptions={{
                    activeBackgroundColor: '#2A2A3C',
                    labelStyle: {
                        color: '#FFFFFF',
                        opacity: 0.5,
                    },
                }}
                drawerContent={(props) => <DrawerContent {...props} />}
            >
                <Drawer.Screen
                    name="Stock"
                    options={{
                        drawerIcon: drawerIcon('ios-albums'),
                    }}
                    component={StockScreen}
                />
                <Drawer.Screen
                    name="Vente"
                    options={{
                        drawerIcon: drawerIcon('ios-basket'),
                    }}
                    component={VenteScreen}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default DrawerNavigator;
