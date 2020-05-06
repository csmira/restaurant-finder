import React from 'react';
import '../common/common.css';
import './App.css';
import RestaurantList from '../RestaurantList/RestaurantList';
import SearchBar from '../common/SearchBar';


class App extends React.Component {

    render() {
        return (
            <div className="mainUI">
                <div className="searchOptions">
                    <h1> Restaurant Finder </h1>
                    <SearchBar/>
                </div>
                <RestaurantList/>
            </div>
        );
    }
}

export default App;