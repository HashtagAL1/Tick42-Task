import React from 'react';

interface IProps {
    className: string,
    title: string,
    hide?: boolean,
    disabled?: boolean,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<IProps> = ({ className, title, hide, disabled, onClick }) => {

    if(hide || !title) return null;

    return <button className={`custom-button ${className}`} disabled={disabled || false} onClick={onClick}>
        {title}
    </button>
};

export default Button;