import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

jest.dontMock('../app/components/layout/header.js');

import Header from '../app/components/layout/header.js';

describe('Header Component', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
    })

    it('should have a logo with correct src', () => {
        var header = TestUtils.renderIntoDocument(
            <Header/>
        );

        var logo = TestUtils.findRenderedDOMComponentWithTag(header, 'img');

        expect(logo.src).toEqual('/public/assets/laterooms_logo.png');
    })
})