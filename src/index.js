import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App/App';
import reducers from './store/reducers.js';

ReactDOM.render(
	<Provider store={createStore(reducers, applyMiddleware(thunk))}>
		<App/>
	</Provider>,
	document.querySelector('#root')
);