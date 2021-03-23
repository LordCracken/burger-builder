import React from 'react';

import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const Layout = ({ children }) => (
  <>
    <Toolbar />
    <main className={classes.Content}>
      {children}
    </main>
  </>
);

export default Layout;
