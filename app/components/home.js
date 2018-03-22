import React from 'react';
import Header from './layout/header.js';
import Footer from './layout/footer.js';

export default class Home extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <h1>Welcome To LateRooms</h1>
                <Footer/>
            </div>
        );
    }
}