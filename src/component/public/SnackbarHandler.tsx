import React, { FC, useEffect, useState } from 'react';
import { Snackbar } from 'react-native-paper';
import { resetQueryStatus } from '../../redux/globalActions';
import { useAppDispatch, useAppSelector } from '../../redux/store';

const SnackBackHandler: FC = () => {
    const [visible, setVisible] = useState(false);
    const dispatch = useAppDispatch();
    const createCategoryStatus = useAppSelector((state) => state.category.createCategoryStatus);

    useEffect(() => {
        if (createCategoryStatus.state === 'error') setVisible(true);
    }, [createCategoryStatus.state]);

    return (
        <Snackbar
            visible={visible}
            onDismiss={() => {
                setVisible(false);
                dispatch(resetQueryStatus());
            }}
            action={{
                label: 'Fermer',
                onPress: () => {
                    setVisible(false);
                    dispatch(resetQueryStatus());
                },
            }}
        >
            {createCategoryStatus.message && createCategoryStatus.message}
        </Snackbar>
    );
};

export default SnackBackHandler;
