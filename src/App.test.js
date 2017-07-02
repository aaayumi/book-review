import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Form from './components/Form';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

function sum (a,b){
    return a + b;
}

it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});

it('renders form', () => {
  const div = shallow(<Form />);
   expect(div.text()).toEqual(expect.stringContaining('Add Review'));
});

it('submit form', () => {
  const div = shallow(<Form />);
  div.setState({ name: 'bar' });
  expect(div.find('#bookName').props().value).toEqual('bar');
});
