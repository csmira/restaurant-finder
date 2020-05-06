import opentable from '../api/opentable.js';

export const fetchRestaurants = city => async dispatch => {
    try{ 
        const restaurants = await opentable.get('restaurants', {
            params: {city}
        });
    
        dispatch({type: 'FETCH_RESTAURANTS', payload: restaurants.data});
    }
    catch (err) {
        dispatch({type: 'FETCH_ERROR', payload: err});
    }
   
};

export const setCity = city => {
    return {
        type: 'SET_CITY',
        payload: city
    };
};

export const setRefineFilter = filter => {
    return {
        type: 'SET_REFINE_FILTER',
        payload: filter
    };
};

export const toggleAscFilter = filter => {
    return {
        type: 'TOGGLE_ASC_FILTER',
        payload: filter
    };
};
