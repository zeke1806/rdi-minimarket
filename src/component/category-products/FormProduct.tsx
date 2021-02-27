import React, { FC } from 'react';
import { TextInput, View } from 'react-native';
import { tailwind } from '../../lib/tailwind';
import { styles } from '../../styles';
import { SubmitBtn } from '../public/StyledBtn';
import { Ionicons } from '@expo/vector-icons';
import Space from '../public/Space';
import StyledInput from '../public/StyledInput';
import ColaIcon from '../../assets/ColaIcon';

const FormProduct: FC = () => {
    return (
        <View>
            <View
                style={[
                    {
                        width: '50%',
                        height: 160,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        position: 'relative',
                    },
                    styles.shadow,
                ]}
            >
                <View
                    style={tailwind(
                        'bg-green-300 w-8 h-8 flex items-center justify-center rounded-full absolute z-50 -top-4 right-0',
                    )}
                >
                    <Ionicons name="md-create" size={24} color="white" />
                </View>
                <ColaIcon width="100%" height={160} />
            </View>
            <StyledInput
                input={
                    <TextInput
                        style={tailwind('text-white')}
                        placeholderTextColor="white"
                        placeholder="Nom du produit"
                        value={''}
                        onChangeText={() => {
                            //
                        }}
                    />
                }
                error={false}
                label="Nom"
            />
            <Space />
            <StyledInput
                input={
                    <TextInput
                        style={tailwind('text-white')}
                        placeholderTextColor="white"
                        placeholder="Stock en reserve"
                        value={''}
                        onChangeText={() => {
                            //
                        }}
                    />
                }
                error={false}
                label="Stock"
            />
            <Space />
            <StyledInput
                input={
                    <TextInput
                        style={tailwind('text-white')}
                        placeholderTextColor="white"
                        placeholder="Prix unitaire"
                        value={''}
                        onChangeText={() => {
                            //
                        }}
                    />
                }
                error={false}
                label="Prix"
            />
            <Space />
            <StyledInput
                input={
                    <TextInput
                        style={tailwind('text-white')}
                        placeholderTextColor="white"
                        placeholder="Cout de revient"
                        value={''}
                        onChangeText={() => {
                            //
                        }}
                    />
                }
                error={false}
                label="Cout"
            />
            <Space />
            <View style={tailwind('self-end')}>
                <SubmitBtn
                    onPress={() => {
                        //
                    }}
                    disabled={false}
                />
            </View>
        </View>
    );
};

export default FormProduct;
