import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from 'mineral-ui/themes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>, 
document.getElementById('root'));
registerServiceWorker();
