import React from 'react'
import {render} from 'react-dom'
import weather from './weather'
import {createStore} from "redux";
import {Weather} from './Weather'

const store = createStore(weather)
let state = store.getState();
render(
    <div>
        <h1>{state.title}</h1>
        <Weather cities={state.cities} currentCityName={'Moscow'} data={state.data}/>
    </div>
    , document.getElementById('app')
);