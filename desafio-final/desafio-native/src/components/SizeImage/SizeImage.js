import React, { Component } from 'react';
import { Container, Image } from './styles';

import pizza from '../../assets/img/size.png';

export default class SizeImage extends Component {
  //
  state = {};

  setSource = () => {
    const { size } = this.props;

    switch (size) {
      case 'P': return pizza;
      case 'M': return pizza;
      case 'G': return pizza;
      case 'GG': return pizza;
      default: return pizza;
    }
  }

  render() {
    const { size } = this.props;

    return (
      <Container>
        <Image size={size} source={this.setSource()} />
      </Container>
    );
  }
}
