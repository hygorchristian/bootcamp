import React, { Component } from 'react';
import { Container, Search, User } from './styles';

export default class Header extends Component {
  //
  state = {};

  render() {
    return (
      <Container>
        <Search>
          <input placeholder="Search" />
        </Search>

        <User>
          <img src="https://randomuser.me/api/portraits/men/17.jpg" alt="Avatar" />
          Hygor Dias
        </User>
      </Container>
    );
  }
}
