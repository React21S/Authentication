import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import {AuthContextProvider} from "./context/AuthContext"


ReactDOM.render(

    <AuthContextProvider>
    <App />
    </AuthContextProvider>,

  document.getElementById('root')
);

