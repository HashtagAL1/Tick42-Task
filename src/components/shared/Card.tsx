import React from 'react';

interface ICardProps {
    className: string,
    children?: | JSX.Element | JSX.Element[] | string | string[],
    shouldDisplay?: boolean
};

const Card: React.FC<ICardProps> = ({ className, children, shouldDisplay }) => {

    if(!shouldDisplay) return null;

    return <div className={`card ${className}`}>
        {children}
    </div>
};

export default Card;