import { DrawerScreenProps } from '@react-navigation/drawer';
import * as React from 'react';
import { Text, View } from 'react-native';
import FloatingButton from '../component/public/FloatingButton';
import { RootDrawerParamList } from '../navigation/Drawer';

type Props = DrawerScreenProps<RootDrawerParamList, 'Vente'>;

const VenteScreen: React.FC<Props> = ({ navigation }: Props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FloatingButton navigation={navigation} />
            <Text>Vente Screen</Text>
        </View>
    );
};

export default VenteScreen;
