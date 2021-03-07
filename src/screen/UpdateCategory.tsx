import { useRoute } from '@react-navigation/core';
import React, { FC } from 'react';
import UpdateCategory from '../component/category/UpdateCategory';
import MainLayoutCtn from '../component/layout/MainLayoutCtn';
import { UpdateCategoryScreenRouteProp } from '../navigation/Stock';

const UpdateCategoryScreen: FC = () => {
    const route = useRoute<UpdateCategoryScreenRouteProp>();
    return (
        <MainLayoutCtn withoutDrawer>
            <UpdateCategory category={route.params.category} />
        </MainLayoutCtn>
    );
};

export default UpdateCategoryScreen;
