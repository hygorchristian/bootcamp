import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PodcastsActions } from '../../store/ducks/podcasts';

import {
  Container, CoverBackground, EpisodeInfo, Title, Author,
  Controls, ControlButton, ControlIcon,
} from './styles';

export default class Player extends Component {
  componentWillMount() {
    //
  }

  render() {
    return (
      <Container>
        <CoverBackground source={{ uri: 'https://s3-sa-east-1.amazonaws.com/gonative/cover1.png' }} />
        <EpisodeInfo>
          <Title>Desengo</Title>
          <Author>Akd eoos</Author>
        </EpisodeInfo>

        <Controls>
          <ControlButton onPress={() => {}}>
            <ControlIcon name="skip-previous" />
          </ControlButton>
          <ControlButton onPress={() => {}}>
            <ControlIcon name="play-circle-filled" />
          </ControlButton>
          <ControlButton onPress={() => {}}>
            <ControlIcon name="skip-next" />
          </ControlButton>
        </Controls>
      </Container>
    );
  }
}

// const mapStateToProps = ({ podcasts }) => ({
//   podcasts,
// });
//
// const mapDipatchToProps = dispatch => bindActionCreators({
//   ...PodcastsActions,
// }, dispatch);
//
// export default connect(mapStateToProps, mapDipatchToProps)(Player);
