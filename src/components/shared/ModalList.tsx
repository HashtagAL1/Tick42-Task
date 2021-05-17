import React from 'react';
import Button from './Button';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IEmployee } from '../../types/employeeTypes';

interface IProps {
    collection: IEmployee[] | any,
    isEditable?: boolean,
    noDataText: string,
    title: string,
    dispatch?: any,
    actionType?: string
}

const ModalList: React.FC<IProps> = ({ collection, isEditable, noDataText, title, actionType, dispatch }) => {

    return <div className="w-100 pt-2">
        <div className="w-100 font-size-heading font-weight-bold font-color-gray text-center">
            {title}
        </div>

        {collection.length === 0 
        ? <div className="w-100 font-color-gray font-size-small text-center">{noDataText}</div>
        : null
        }

        {collection.map((item: IEmployee | any) => {
            return <div className="w-100 pt-2 pb-2 employee-list-modal-item" key={item.id ? item.id : item}>
                <div className="d-inline-block w-75">
                    {item.name ? item.name : item}
                </div>

                {isEditable 
                ?<div className="d-inline-block w-25 text-center">
                    <Button className="w-30 pt-1 pb-1 button-red button-rectangular font-size-normal font-color-default font-weight-bold"
                        icon={<FontAwesomeIcon icon={faTrashAlt}/>}
                        onClick={() => dispatch({ type: actionType, payload: item })}
                    />
                </div> 
                : null}
            </div>
        })}
    </div>
};

export default ModalList;