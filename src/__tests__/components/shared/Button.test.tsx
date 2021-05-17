import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../../components/shared/Button';

const setupComponent = (props: any) => {
    return shallow(<Button {...props}/>)
}

const getWrapper = (component: any) => {
    return component.find('[data-test="custom-button"]')
}

describe('Button', () => {
    it('Should render without errors', () => {
        const component = setupComponent({ className: 'test-class', title: "testButton", onClick: jest.fn() });
        const wrapper = getWrapper(component);
        expect(wrapper.length).toBe(1);
        expect(wrapper.text()).toBe('testButton');
        expect(wrapper.hasClass('test-class')).toBeTruthy();
        expect(wrapper.hasClass('custom-button')).toBeTruthy();
    });

    it(`Shouldn't render if hide prop is true`, () => {
        const component = setupComponent({ className: 'class', title: 'button', onClick: jest.fn(), hide: true });
        const wrapper = getWrapper(component);
        expect(wrapper.length).toBe(0);
    });

    it('Should handle onClick', () => {
        const onClick = jest.fn();
        const component = setupComponent({ className: 'test', onClick: onClick });
        const wrapper = getWrapper(component);

        wrapper.simulate('click');

        expect(onClick).toHaveBeenCalledTimes(1);
    });
});