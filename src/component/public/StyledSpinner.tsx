import React, { FC } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { useAppSelector } from '../../redux/store';

const StyledSpinner: FC = () => {
    const visible = useAppSelector((state) => state.spinner.visible);
    return <Spinner visible={visible} />;
};

export default StyledSpinner;
