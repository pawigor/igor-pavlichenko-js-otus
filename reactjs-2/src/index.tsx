import React from 'react'
import {render} from 'react-dom'
import {title} from "./title";
import {Weather} from './Weather'
import data from './data'

render(
    <div>
        <h1>{title}</h1>
        <Weather cities={['Moscow']} currentCityName={'Moscow'} data={data}/>
    </div>
    , document.getElementById('app')
);