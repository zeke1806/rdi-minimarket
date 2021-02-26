export type QueryState = 'stateless' | 'loading' | 'success' | 'error';
export interface QueryStatus {
    state: QueryState;
    message?: string;
}
export const DEFAULT_QUERY_STATE: QueryStatus = {
    state: 'stateless',
    message: undefined,
};
