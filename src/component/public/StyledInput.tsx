/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, ReactNode } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { tailwind } from '../../lib/tailwind';
import { Ionicons } from '@expo/vector-icons';

interface Props {
    input: ReactNode;
    right?: ReactNode;
    searchResult?: string;
    success?: boolean;
    error?: boolean;
}
const StyledInput: FC<Props> = ({ input: Input, right: Right, searchResult, success, error }) => {
    return (
        <View>
            <View
                style={[styles.shadow, tailwind('p-4 rounded-md flex-row items-center justify-between bg-secondary')]}
            >
                <View>{Input}</View>
                <View style={tailwind('ml-1 flex-row justify-between')}>
                    {Right}
                    {success && <Ionicons name="md-checkmark" size={24} color="green" />}
                    {error && <Ionicons name="md-warning" size={24} color="red" />}
                </View>
            </View>
            <View style={tailwind('items-center mt-1')}>
                {searchResult && <Text style={tailwind('text-white font-thin text-xs')}>{searchResult}</Text>}
            </View>
        </View>
    );
};

export default StyledInput;

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6,
    },
});
