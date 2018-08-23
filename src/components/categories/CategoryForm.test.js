import CategoryForm from './CategoryForm';
import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('Category form', () => {

  it('Renders add if no category prop', () => {
    const handleComplete = jest.fn();
    const promise = Promise.resolve();
    handleComplete.mockReturnValueOnce(promise);

    const wrapper = mount(<CategoryForm onComplete={handleComplete}/>);
    expect(toJSON(wrapper)).toMatchSnapshot();

    const category = {
      name: 'Car',
      budget: 5000,
      timestamp: null
    };

    wrapper.find('input[name="name"]').simulate('change', {
      target: {
        name: 'name',
        value: category.name
      }
    });

    wrapper.find('input[name="budget"]').simulate('change', {
      target: {
        name: 'budget',
        value: category.budget
      }
    });

    wrapper.find('button').simulate('submit');

    const calls = handleComplete.mock.calls;
    expect(calls.length).toBe(1);
    expect(calls[0][0]).toEqual(category);

    expect(toJSON(wrapper)).toMatchSnapshot();

    return promise  .then(() => {
      wrapper.update();
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

  });

  it('Renders edit if there is category prop', () => {
    const handleComplete = jest.fn();
    const promise = Promise.resolve();
    handleComplete.mockReturnValueOnce(promise);
    const handleCancel = jest.fn();

    const category = { key: 'abc', name: 'car', budget: 5000 };

    const wrapper = mount(<CategoryForm onComplete={handleComplete} onCancel={handleCancel} category={category}/>);

    expect(toJSON(wrapper)).toMatchSnapshot();

  });

});