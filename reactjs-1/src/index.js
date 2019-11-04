import React from 'react'
import {render} from 'react-dom'
import {hello} from "./hello";

render(<h1>{hello}</h1>, document.getElementsByTagName('body')[0]);