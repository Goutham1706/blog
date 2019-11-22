import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import reducers from './reducers';
import thunk from "redux-thunk"

render(
	<Provider store={createStore(reducers, applyMiddleware(thunk))}>
		<App />
	</Provider>,
	document.getElementById('root')
);
