import React from 'react';
import { Router } from 'react-router-dom';
import { render } from 'react-dom';

import { history } from './_helpers';
import { userService } from './_services';
import { App } from './app';

import './styles.less';

// setup fake backend
// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();

// attempt silent token refresh before startup
userService.refreshToken().finally(startApp);

function startApp() { 
    render(
        <Router history={history}>
            <App />
        </Router>,
        document.getElementById('app')
    );
}