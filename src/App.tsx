import * as React from 'react';

import 'antd/dist/antd.min.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppRouter } from '~/routes';
import { store } from '~/store';
import { lightTheme } from '~/ui/styles';

import './App.scss'

// apolloClient.resetStore();

export const App: React.FC = () => (
  <Router>
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <AppRouter />
      {/* <div>App here</div> */}
      </ThemeProvider>
     
  </Provider>
  </Router>

  
);
