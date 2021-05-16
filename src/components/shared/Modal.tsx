import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

interface IProps {
    isOpen: boolean,
    title: string,
    className: string,
    children?: | JSX.Element | JSX.Element[] | string | string[],
    onClose: (event: React.MouseEvent<HTMLOrSVGElement>) => void
}

const Modal: React.FC<IProps> = ({ isOpen, title, className, children, onClose }) => {
    if(!isOpen) return null;
    
    return <div className="modal-container">
        <div className={`modal-content ${className}`}>
            <div className="modal-header">
                <div>{title}</div>
                <FontAwesomeIcon className="cursor-pointer" icon={faTimes} onClick={onClose}/>
            </div>
            <div className="modal-content-wrapper">
                {children}
            </div>
        </div>
    </div>
};

export default Modal;