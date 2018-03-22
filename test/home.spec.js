import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

jest.dontMock('../app/components/Home.js');

import Home from '../app/components/Home.js';

describe('Home Component', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        div.setAttribute('id', 'root')
        ReactDOM.render(<Home />, div);
    })
})