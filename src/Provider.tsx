import { ApolloProvider } from '@apollo/client';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { apollo } from '../src/api/apollo';
import DrawerNavigator from './navigation/Drawer';

const Provider: React.FC = () => {
    return (
        <ApolloProvider client={apollo}>
            <StatusBar style="auto" />
            <DrawerNavigator />
        </ApolloProvider>
    );
};

export default Provider;
