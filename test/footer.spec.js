import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';

jest.dontMock('../app/components/layout/footer.js');

import Footer from '../app/components/layout/footer.js';

describe('Footer Component', () => {
    it('should render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Footer />, div);
    })

    it('should have a p tag with copyright text', () => {
        var footer = TestUtils.renderIntoDocument(
            <Footer/>
        );

        var copyright = TestUtils.findRenderedDOMComponentWithTag(footer, 'p');

        expect(copyright.textContent).toEqual('Copyright 2018 Laterooms');
    })
})