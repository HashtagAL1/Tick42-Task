import React from 'react';

interface ICardProps {
    className: string,
    children?: | JSX.Element | JSX.Element[] | string | string[]
}

const Card: React.FC<ICardProps> = ({ className, children }) => {
    return <div className={`card ${className}`}>
        {children}
    </div>
};

export default Card;