import React, { FC } from 'react';
import { Snackbar } from 'react-native-paper';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { actions } from '../../redux/snackbarSlice';

const SnackBackHandler: FC = () => {
    const { reset } = actions;
    const { visible, message } = useAppSelector((state) => state.snackbar);
    const dispatch = useAppDispatch();

    return (
        <Snackbar
            visible={visible}
            onDismiss={() => {
                dispatch(reset());
            }}
            action={{
                label: 'Fermer',
                onPress: () => {
                    dispatch(reset());
                },
            }}
        >
            {message}
        </Snackbar>
    );
};

export default SnackBackHandler;
