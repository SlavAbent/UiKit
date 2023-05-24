import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const documentElement  = document.getElementById('root') as HTMLElement

const root = ReactDOM.createRoot(documentElement);

root.render( <App /> );
