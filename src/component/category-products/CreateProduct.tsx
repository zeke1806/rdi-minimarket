import React, { FC } from 'react';
import { View } from 'react-native';
import Space from '../public/Space';
import Title from '../public/Titile';
import FormProduct from './FormProduct';

const CreateProduct: FC = () => {
    return (
        <View>
            <Title text="Ajouter un produit" />
            <Space />
            <FormProduct />
        </View>
    );
};

export default CreateProduct;
