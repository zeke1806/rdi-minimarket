import { ApolloProvider } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { apollo } from '../src/api/apollo';
import DrawerNavigator from './navigation/Drawer';

export default function Provider() {
    return (
        <ApolloProvider client={apollo}>
            <DrawerNavigator />
            <StatusBar style="auto" />
        </ApolloProvider>
    );
}
