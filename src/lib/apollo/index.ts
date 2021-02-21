import { ApolloClient, InMemoryCache } from '@apollo/client';
import { API_URL } from '../../config';
import { Categories } from './types';

export const apollo = new ApolloClient({
    uri: API_URL,
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    categories: {
                        keyArgs: false,
                        merge(existing: Categories | undefined, incoming: Categories) {
                            const existingData = existing ? existing.data : [];
                            const data = [...existingData, ...incoming.data];
                            return {
                                ...incoming,
                                data,
                            };
                        },
                    },
                },
            },
        },
    }),
});
