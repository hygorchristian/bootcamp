import './config/reactotron';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Global from './styles/global';
import { Wrapper, Container, Content } from './styles/components';

import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import Routes from './routes';

import store from './store';
import ErrorBox from './components/ErrorBox';

const App = () => (
  <Provider store={store}>
    <Global />
    <BrowserRouter>
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <ErrorBox />
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  </Provider>

  );

export default App;
