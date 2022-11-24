import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import App from './App';

const defaultState = {
    cash: 0,
}



const bankReducer = (state = defaultState, action) => {

    switch (action.type) {

        case 'ADD_CASH':
            return { ...state, cash: state.cash + action.payload }

        case 'GET_CASH':
            return { ...state, cash: state.cash - action.payload }

        default:
            return state
    }



}




const store = configureStore(bankReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>


);


