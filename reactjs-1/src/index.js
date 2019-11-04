import React from 'react'
import {render} from 'react-dom'
import {hello} from "./hello.ts";

render((<div>{hello}</div>), document.getElementsByTagName('body')[0]);