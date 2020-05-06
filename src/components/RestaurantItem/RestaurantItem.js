import React from 'react';
import '../common/common.css';
import './RestaurantItem.css';

class RestaurantItem extends React.Component {

    render() {
        return (
            <div className="card" tabIndex='0'>
                <div className="card__content">
                    {this.props.restaurant.name}
                    <span className="text--light">{this.props.restaurant.address}</span>
                    <span className="price">${this.props.restaurant.price}</span>
                </div>
            </div>
        )
    }
}

export default RestaurantItem;