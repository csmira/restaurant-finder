import { combineReducers } from 'redux';

const restaurants = (restaurantList = [], action) => {
    if(action.type === 'FETCH_RESTAURANTS') {
        return action.payload.restaurants.map(({id, name, address, area, price}) => {
            return {id, name, address, area, price};
        });
    }
    return restaurantList;
}

const city = (city = '', action) => {
    if(action.type === 'SET_CITY') {
        return action.payload;
    }
    return city;
}

const initialFilters = {
    refine: '',
    asc: true
};

const filters = (filters = initialFilters, action) => {
    switch(action.type) {
        case 'SET_REFINE_FILTER': {
            return Object.assign({}, filters, {
                refine: action.payload
            });
        }
        case 'TOGGLE_ASC_FILTER': {
            return Object.assign({}, filters, {
                asc: action.payload
            });
        }
        default: 
            return filters
    }
}

const error = (error = '', action) => {
    if(action.type === 'FETCH_ERROR') {
        return action.payload;
    }
    return error;
}

export default combineReducers({
    restaurants,
    city,
    filters,
    error,
});