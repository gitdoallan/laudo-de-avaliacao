import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WithLayout from 'WithLayout';
// Available layouts
import {
  Main as MainLayout,
} from './layouts';

// Landing pages
import {
  Consulting as ConsultingView,
} from './views/landingPages';

const Routes = () => {
  return (
    <Switch>
      <Route
        path="*"
        render={(matchProps) => (
          <WithLayout
            {...matchProps}
            component={ConsultingView}
            layout={MainLayout}
          />
        )}
      />
    </Switch>
  );
};

export default Routes;
