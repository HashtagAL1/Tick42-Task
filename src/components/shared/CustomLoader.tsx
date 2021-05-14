import React from 'react';
import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { IRootState } from '../../types/reducerTypes';

const CustomLoader: React.FC = () => {
    const loading = useSelector<IRootState>(state => state.shared.loading);

    if (!loading) return null;

    return <div className="loading-container">
        <Loader type="Circles" color="#0d6efd" height={100} width={100} />
        <h4 className="loading-text">Loading, please wait...</h4>
    </div>
};

export default CustomLoader;