import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ResultsContextProvider } from './context/results-context'


ReactDOM.render(
    <ResultsContextProvider>
        <Router>
            <App />
        </Router>
    </ResultsContextProvider>
    , document.getElementById('root')
);

