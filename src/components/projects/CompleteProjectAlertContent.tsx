import React from 'react';
import Button from '../shared/Button';

interface IProps {
    close: any
}

const CompleteProjectAlertContent: React.FC<IProps> = ({ close }) => {
    return <div className="w-100 h-100 pt-2">
        <div className="text-left">Earned revenue:</div>
        <div className="">
            <input className="w-100" type="text"/>
        </div>
        <div className="w-100 text-right pt-2">
            <Button className="button-green pt-1 pb-1 button-rectangular font-size-normal font-color-default font-weight-bold"
                title="Complete" 
                onClick={() => {close()}}
            />
        </div>
    </div>
};

export default CompleteProjectAlertContent;