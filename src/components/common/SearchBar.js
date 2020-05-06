import React from 'react';
import {connect} from 'react-redux';
import './common.css';
import {
    fetchRestaurants, 
    setCity, 
    setRefineFilter, 
    toggleAscFilter,
} from '../../store/actions.js';


class SearchBar extends React.Component {
    handleSearchButton = e => {
        e.preventDefault();
        if(this.props.city !== '') {
            this.props.fetchRestaurants(this.props.city);
        }
        else {
            alert('Enter a city name');
        } 
    }
    handleAscButton = e => {
        e.stopPropagation();
        this.props.toggleAscFilter(true);
    }

    handleDescButton = e => {
        e.stopPropagation();
        this.props.toggleAscFilter(false);
    }

    render() {
        return (
            <div className="searchBar">
                <form>
                    <div className="ui">
                        <input  className="input input--lg" 
                                type='text' 
                                placeholder='Search City' 
                                aria-label='search bar'
                                value={this.props.city}
                                onChange={(e) => this.props.setCity(e.target.value)}/>
                        <button type='submit' className="btn" onClick={this.handleSearchButton}>Search</button>
                    </div>
                    <div className="ui filters">
                        <input  type='text' 
                                className="input input--md" 
                                placeholder='Refine Search' 
                                aria-label='refine bar'
                                value={this.props.filters.refine} 
                                onChange={e => this.props.setRefineFilter(e.target.value)}/>
                        <button type='button' className="btn" aria-label='ascending sort' onClick={this.handleAscButton}>ASC</button>
                        <button type='button' className="btn" aria-label='descending sort' onClick={this.handleDescButton}>DESC</button>
                    </div>
                </form> 
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {restaurants: state.restaurants,
            city: state.city,
            filters: state.filters
        };
}
export default connect(mapStateToProps, {fetchRestaurants, setCity, setRefineFilter,toggleAscFilter})(SearchBar);