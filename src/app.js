import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Main from './main'

render(
  <AppContainer>
    <Main />
  </AppContainer>,
  document.getElementById('main')
);

if (module.hot) {
  module.hot.accept('./main', () => {
    const NextMain = require('./main').default;
    render(
      <AppContainer>
        <NextMain />
      </AppContainer>,
      document.getElementById('main')
    );
  });
}