import React from 'react';

interface IProps {
    type: string,
    className: string,
    placeholder: string,
    id: string,
    value: number | string | undefined,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<IProps> = ({ type, className, placeholder, id, value, onChange }) => {
    return <input type={type} 
        className={`custom-input ${className}`} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange}
    />
};

export default Input;