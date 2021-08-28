import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main } from './main';
// import { Update } from './Update';

function Projects({ match }) {
    const { path } = match;
    
    return (
        <div className="p-4">
            <div className="container">
                <Switch>
                    <Route exact path={path} component={Main} />
                    {/* <Route path={`${path}/update`} component={Update} /> */}
                </Switch>
            </div>
        </div>
    );
}

export { Projects };