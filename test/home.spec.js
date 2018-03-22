import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

jest.dontMock('../app/components/home.js');

import Home from '../app/components/home.js';

describe('Home Component', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        div.setAttribute('id', 'root')
        ReactDOM.render(<Home />, div);
    })

    it('should have a h1 tag with correct title', () => {
        var home = TestUtils.renderIntoDocument(
            <Home/>
        );

        var title = TestUtils.findRenderedDOMComponentWithTag(home, 'h1');

        expect(title.textContent).toEqual('Welcome To LateRooms');
    })
})