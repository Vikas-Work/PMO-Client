import React from 'react';

import { userService } from '@/_services';

function Home() {
    const user = userService.userValue;
    
    return (
        <div className="p-4">
            <div className="container">
                <h1>Hi {user.firstName}!</h1>
                <p>Welcome to PMO Workbench!!</p>
       
        </div>
        </div>
    );
}

export { Home };