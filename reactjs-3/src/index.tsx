import React from 'react'
import {render} from 'react-dom'
import weather from './weather'

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import Weather from './Weather'

const store = createStore(weather, applyMiddleware(thunk))
let state = store.getState();
render(
    <div>
        <Provider store={store}>
            <h1>{state.title}</h1>
            <Weather/>
        </Provider>
    </div>
    , document.getElementById('app')
);