import React from 'react';

interface IProps {
    isOpen: boolean,
    title: string,
    className: string,
    children?: | JSX.Element | JSX.Element[] | string | string[],
    //onClose: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Modal: React.FC<IProps> = ({ isOpen, title, className, children }) => {
    if(!isOpen) return null;
    
    return <div className="modal-container">
        <div className="modal-content">
            <div className="modal-header">
                <div>{title}</div>
            </div>
            <div className={`modal-content-wrapper ${className}`}>
                {children}
            </div>
        </div>
    </div>
};

export default Modal;