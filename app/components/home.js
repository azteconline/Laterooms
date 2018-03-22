import React from 'react';
import Header from './layout/header.js';
import Footer from './layout/footer.js';
import Search from './search/search.js';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <h1>Welcome To LateRooms</h1>
                <Search/>
                <Footer/>
            </div>
        );
    }
}