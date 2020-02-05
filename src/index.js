// modules
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// reducers
import { featureReducer as reducer } from './reducers';

// components
import App from './App';

// styles
import 'bulma/css/bulma.css';
import './styles.scss';

// set up the store to use featureReducer as the reducer
const store = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
    // wrap <App /> in Redux Provider
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);
