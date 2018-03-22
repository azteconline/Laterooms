import React from 'react';

export default class Result extends React.Component {
    render() {
        return (
            <div>
                <h3>{this.props.result.Name}</h3>
                <h4>{this.props.result.StarRating} star</h4>
                <ul>{this.props.result.Facilities != null && this.props.result.Facilities.map(facility => <li key={facility}>{facility}</li>)}</ul>       
            </div>
        );
    }
}