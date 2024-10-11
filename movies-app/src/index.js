import './index.css'

import React from 'react'
import {render} from 'react-dom'
import dotenv from 'dotenv';
import App from './App.jsx'

dotenv.config();

render(<App/>, document.getElementById('root'))
