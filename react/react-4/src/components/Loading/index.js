import React, { Component } from 'react';
import { Spinner } from './styles';
import LoadingIcon from '../../assets/images/loading.svg';

export default class Loading extends Component {
  //
  state = {};

  render() {
    return (
      <Spinner src={LoadingIcon} alt="Carregando..." />
    );
  }
}
