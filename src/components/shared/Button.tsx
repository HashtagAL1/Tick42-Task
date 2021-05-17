import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core';
import React from 'react';

interface IProps {
    className: string,
    title?: string,
    hide?: boolean,
    disabled?: boolean,
    icon?: any,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<IProps> = ({ className, title, hide, disabled, icon, onClick }) => {

    if(hide) return null;

    return <button data-test="custom-button" className={`custom-button ${className}`} disabled={disabled} onClick={onClick}>
        {icon ? <>{icon}</> : <>{title}</>}
    </button>
};

export default Button;