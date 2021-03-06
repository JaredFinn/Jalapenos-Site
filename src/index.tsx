import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import * as ServiceWorkerRegistration from './etc/serviceWorkerRegistration';
import reportWebVitals from './etc/reportWebVitals';
import moment from 'moment';

moment.suppressDeprecationWarnings = true;
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

ServiceWorkerRegistration.register();

reportWebVitals();
