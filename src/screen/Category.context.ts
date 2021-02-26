import { createContext } from 'react';

export const FilterContext = createContext({
    filter: '',
    handleChangeFilter(value: string) {
        //
    },
});
