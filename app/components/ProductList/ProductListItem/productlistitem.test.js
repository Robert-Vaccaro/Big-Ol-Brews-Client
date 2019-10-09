import React from 'react';
import ReactDOM from 'react-dom';
import ProductListItem from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});