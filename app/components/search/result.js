import React from 'react';

export default class Result extends React.Component {
    render() {
        return (
            <div className="card card-inverse">
                <div className="card-block">
                    <div className="card-header">
                        <h3>{this.props.result.Name}</h3>
                        <h4>{this.props.result.StarRating} star</h4>
                    </div>
                    <div className="card-content">
                        <ul>{this.props.result.Facilities != null && this.props.result.Facilities.map(facility => <li key={facility}>{facility}</li>)}</ul>
                        <div className="text-right">
                            <button className="btn btn-primary" title="Click here to book this hotel">Book this hotel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}