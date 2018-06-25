import React from 'react';
import {render} from 'react-dom';
import App from './App.jsx';
import './global.css';
import { ipcRenderer } from 'electron';
render(
    <App/>,
    document.getElementById('app')
)