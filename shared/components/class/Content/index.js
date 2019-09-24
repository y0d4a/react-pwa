import React from 'react';
import { Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../../../constants/routes';

const ContentComponent = () => (
    <Switch>
        {renderRoutes(routes)}
    </Switch>
);
export default ContentComponent;