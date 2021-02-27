import React, { FC } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import CreateProduct from './CreateProduct';

const ListHeader: FC = () => {
    return <CreateProduct />;
};

const ProductList: FC = () => {
    return (
        <>
            <FlatList
                ListHeaderComponent={<ListHeader />}
                data={[]}
                renderItem={() => {
                    return <></>;
                }}
            />
        </>
    );
};

export default ProductList;
