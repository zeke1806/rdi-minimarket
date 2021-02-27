import React, { ReactFragment } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { apollo } from './src/lib/apollo';
import { store } from './src/redux/store';
import { ApolloProvider } from '@apollo/client';
import DrawerNavigator from './src/navigation/Drawer';
import SnackBackHandler from './src/component/public/SnackbarHandler';
import StyledSpinner from './src/component/public/StyledSpinner';

export default function App(): ReactFragment {
    return (
        <ReduxProvider store={store}>
            <ApolloProvider client={apollo}>
                <StatusBar style="auto" />
                <StyledSpinner />
                <DrawerNavigator />
                <SnackBackHandler />
            </ApolloProvider>
        </ReduxProvider>
    );
}
