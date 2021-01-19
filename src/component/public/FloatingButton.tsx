import * as React from 'react';
import { StyleSheet, View, Animated, TouchableWithoutFeedback } from 'react-native';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../../navigation/Drawer';

type Props = {
    navigation: DrawerNavigationProp<RootDrawerParamList, 'Stock' | 'Vente'>;
};

const FloatingButton: React.FC<Props> = ({ navigation }: Props) => {
    return (
        <View style={[styles.container]}>
            <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
                <Animated.View style={[styles.button, styles.menu]}>
                    <Icon name="ios-menu" size={25} color="#fff" />
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default FloatingButton;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: '5%',
        left: '3%',
    },
    button: {
        position: 'absolute',
        width: 45,
        height: 45,
        borderRadius: 60 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: '#2a2a2a',
        shadowOpacity: 0.3,
        //shadowOffset: {height: 10}
    },
    menu: {
        backgroundColor: '#2a2a2a',
    },
});
