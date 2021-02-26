import { ApolloClient, InMemoryCache } from '@apollo/client';
import { API_URL } from '../../config';

export const apollo = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'network-only',
        },
        query: {
            fetchPolicy: 'network-only',
        },
    },
});
