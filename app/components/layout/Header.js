import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header className="lr-header">
                <div className="row">
                    <div className="col-12 text-center">
                        <img src="/public/assets/laterooms_logo.png" alt="Laterooms Logo" className="img-fluid" />
                    </div>
                </div>
            </header>
        );
    }
}