export type QueryState = 'stateless' | 'loading' | 'success' | 'error';
export interface QueryStatus {
    state: QueryState;
    message?: string;
}
