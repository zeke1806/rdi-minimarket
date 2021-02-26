import { ApolloProvider } from '@apollo/client';
import React from 'react';
import DrawerNavigator from './navigation/Drawer';
import { Provider as ReduxProvider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { apollo } from './lib/apollo';
import { store } from './redux/store';

const Provider: React.FC = () => {
    return (
        <ReduxProvider store={store}>
            <ApolloProvider client={apollo}>
                <StatusBar style="auto" />
                <DrawerNavigator />
            </ApolloProvider>
        </ReduxProvider>
    );
};

export default Provider;
