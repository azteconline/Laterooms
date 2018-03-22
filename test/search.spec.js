import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../app/components/search/search.js';
import Result from '../app/components/search/result.js';

jest.dontMock('../app/components/search/search.js');
jest.dontMock('../app/components/search/result.js');

describe('Search Components', () => {
    it('should render search without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Search />, div);
    })

    it('should render result without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Result />, div);
    })
})