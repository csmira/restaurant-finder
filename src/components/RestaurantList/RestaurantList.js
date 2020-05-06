import React from 'react';
import { connect } from 'react-redux';
import '../common/common.css';
import './RestaurantList.css';
import RestaurantItem from '../RestaurantItem/RestaurantItem'

class RestaurantList extends React.Component {

    renderFilteredRestaurants() {
        //sort ascending or descending based on button input
        let orderedRestaurants = this.props.restaurants.sort((a,b) => a.name.localeCompare(b.name));
        orderedRestaurants = !this.props.filters.asc ? orderedRestaurants.reverse() : orderedRestaurants;
        
        //refine search
        orderedRestaurants = orderedRestaurants.filter(({name, address, area}) => {
            const filter = this.props.filters.refine.toLowerCase();
            const isFiltered = name.toLowerCase().includes(filter) || address.toLowerCase().includes(filter) || area.toLowerCase().includes(filter);
            if(filter === '' || isFiltered) {
                return true;
            }  
            return false;
        });

        return orderedRestaurants.map(restaurant => {
            return <RestaurantItem key={restaurant.id} restaurant={restaurant}/>;
        });
    }

    render() {
        return (
            <div className="restaurantsGrid">
                {this.renderFilteredRestaurants()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants,
        filters: state.filters,
    };
}

export default connect(mapStateToProps)(RestaurantList);