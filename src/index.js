import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import logo from '../public/images/logo.svg';
import App from './components/App.jsx';

const status = [
    { user: 'Elton', text: 'nothing interesting' },
    { user: 'Elton', text: 'status updated' },
    { user: 'Elton', text: 'my status' },
    { user: 'Vinicius', text: 'other status' }
];

import banner from '../public/images/banner.png';
const render = (Container) => {
    ReactDOM.render(
        <AppContainer>
            <Container
                banner={banner}
                logo={logo}
                status={status}
                {...window.INITIAL_STATE}
            />
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./components/App.jsx', () => {
        const App = require('./components/App.jsx').default;
        render(App);
    });
}
