import React from 'react'
import {render} from 'react-dom'
import {hello} from "./hello";
import {Weather} from './Weather'
import data from './data'

render(
    <div>
        <h1>{hello}</h1>
        <Weather data={data}/>
    </div>
    , document.getElementById('app')
);