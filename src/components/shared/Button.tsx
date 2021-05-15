import React from 'react';

interface IProps {
    className: string,
    title: string,
    hide?: boolean,
    disabled?: boolean
}

const Button: React.FC<IProps> = ({ className, title, hide, disabled }) => {

    if(hide || !title) return null;

    return <button className={`custom-button ${className}`} disabled={disabled || false}>
        {title}
    </button>
};

export default Button;