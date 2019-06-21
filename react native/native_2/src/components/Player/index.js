import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PlayerActions } from '../../store/ducks/player';

import {
  Container, CoverBackground, EpisodeInfo, Title, Author,
  Controls, ControlButton, ControlIcon,
} from './styles';

class Player extends Component {
  componentWillMount() {
    //
  }

  render() {
    const {
      player, currentEpisode, play, pause, next, prev,
    } = this.props;

    return player.current && (
      <Container>
        <CoverBackground source={{ uri: currentEpisode.artwork }} />
        <EpisodeInfo>
          <Title>{currentEpisode.title}</Title>
          <Author>{currentEpisode.artist}</Author>
        </EpisodeInfo>

        <Controls>
          <ControlButton onPress={prev}>
            <ControlIcon name="skip-previous" />
          </ControlButton>
          <ControlButton onPress={player.playing ? pause : play}>
            <ControlIcon name={player.playing ? 'pause-circle-filled' : 'play-circle-filled'} />
          </ControlButton>
          <ControlButton onPress={next}>
            <ControlIcon name="skip-next" />
          </ControlButton>
        </Controls>
      </Container>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  player,
  currentEpisode: player.podcast
    ? player.podcast.tracks.find(episode => episode.id === player.current)
    : null,
});

const mapDipatchToProps = dispatch => bindActionCreators({
  ...PlayerActions,
}, dispatch);

export default connect(mapStateToProps, mapDipatchToProps)(Player);
