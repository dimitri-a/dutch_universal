import store from './store.js';
import {Provider} from 'react-redux';

if (module.hot) {
    module.hot.accept()
}

import ReactDOM from 'react-dom';
import React from 'react';
import './css/test.css';
import AppRoutes from './components/AppRoutes.jsx'


const App = () => (
    <Provider store={store}>
        <div>
            Hello
        </div>
    </Provider>
);

ReactDOM.render(
    <AppRoutes/>
    , document.getElementById('root'));
