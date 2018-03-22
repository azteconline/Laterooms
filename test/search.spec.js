import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import Search from '../app/components/search/search.js';
import Result from '../app/components/search/result.js';

jest.dontMock('../app/components/search/search.js');
jest.dontMock('../app/components/search/result.js');

describe('Search Components', () => {

    describe('Search', () => {

        it('should render search without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<Search />, div);
        })

        it('should contain all required form elements', () => {
            var search = TestUtils.renderIntoDocument(
                <Search />
            );

            var form = TestUtils.findRenderedDOMComponentWithTag(search, 'form');

            var hotelName = TestUtils.scryRenderedDOMComponentsWithTag(search, 'input')[0];
            expect(hotelName.id).toEqual('hotelName');
            expect(hotelName.type).toEqual('text');

            var starRating = TestUtils.findRenderedDOMComponentWithTag(search, 'select');
            expect(starRating.id).toEqual('starRating');

            var carpark = TestUtils.scryRenderedDOMComponentsWithTag(search, 'input')[1];
            expect(carpark.id).toEqual('carpark');
            expect(carpark.type).toEqual('checkbox');

            var pool = TestUtils.scryRenderedDOMComponentsWithTag(search, 'input')[2];
            expect(pool.id).toEqual('pool');
            expect(pool.type).toEqual('checkbox');

            var gym = TestUtils.scryRenderedDOMComponentsWithTag(search, 'input')[3];
            expect(gym.id).toEqual('gym');
            expect(gym.type).toEqual('checkbox');

            var button = TestUtils.findRenderedDOMComponentWithTag(search, 'button');
            expect(button.textContent).toEqual('search');
        })

    })

    describe('Result', () => {

        it('should render result without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<Result />, div);
        })
    })
})