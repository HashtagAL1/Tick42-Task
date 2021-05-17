import React from 'react';
import { shallow } from 'enzyme';
import Input from '../../../components/shared/Input';

const setupComponent = (props: any) => {
    return shallow(<Input {...props}/>);
};

const getWrapper = (component: any) => {
    return component.find('[data-test="custom-input"]');
};

describe('Input', () => {
    const onChange = jest.fn();
    const defaultProps = {
        type: 'text',
        value: 'test',
        className: 'test-class',
        id: 'id',
        placeholder: 'placeholder',
        onChange: onChange
    };

    it('Should render without errors', () => {
        const component = setupComponent(defaultProps);
        const wrapper = getWrapper(component);
        
        expect(wrapper.length).toBe(1);
        expect(wrapper.hasClass('test-class')).toBeTruthy();
        expect(wrapper.props().value).toBe('test');
        expect(wrapper.props().type).toBe('text');
    });

    it('Should handle onChange', () => {
        const component = setupComponent(defaultProps);
        const wrapper = getWrapper(component);

        wrapper.simulate('change', { target: { value: 'change' } });

        expect(onChange).toHaveBeenCalledTimes(1);
    });
});