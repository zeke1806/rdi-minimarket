import { createContext, useContext } from 'react';
import { ERROR_CONTEXT } from '../config';

interface FilterState {
    filter: string;
    handleChangeFilter: (value: string) => void;
}
export const FilterContext = createContext<FilterState | undefined>(undefined);
export const useFilterCtx = () => {
    const context = useContext(FilterContext);
    if (!context) throw new Error(ERROR_CONTEXT('filterCategory'));
    return context;
};
