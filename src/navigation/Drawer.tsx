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
import { Text, View } from 'react-native';

export type RootDrawerParamList = {
    Stock: undefined;
    Vente: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParamList>();

function DrawerContent(props: DrawerContentComponentProps) {
    return (
        <DrawerContentScrollView {...props}>
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 40,
                    marginBottom: 40,
                }}
            >
                <Text>Logo</Text>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const DrawerNavigator: React.FC = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Stock" drawerContent={(props) => <DrawerContent {...props} />}>
                <Drawer.Screen name="Stock" component={StockScreen} />
                <Drawer.Screen name="Vente" component={VenteScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default DrawerNavigator;
