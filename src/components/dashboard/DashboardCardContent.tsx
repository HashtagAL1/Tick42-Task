import React from 'react';

interface IProps {
    label: string,
    value: number | null,
    isCurrency: boolean
}

const DashboardCardContent: React.FC<IProps> = ({ label, value, isCurrency }) => {

    if (value === null) {
        return null;
    }

    return <div className="font-color-gray">
        <span className="font-size-small">{label}: </span>
        <span className="font-size-large font-weight-bold">
            {isCurrency ? `${value?.toFixed(2)}$` : value}
        </span>
    </div>
};

export default DashboardCardContent;