import React, { Component } from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Container, EpisodeList, PodcastDetails, Background, BackButton, Cover,
  PodcastTitle, PlayButton, PlayButtonText, Episode, Title, Author,
} from './styles';
import { PlayerActions } from '../../store/ducks/player';


class Podcast extends Component {
  //
  state = {};

  handleBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  handlePlay = (episodeId) => {
    const { setPodcastRequest, navigation } = this.props;
    const podcast = navigation.getParam('podcast');

    setPodcastRequest(podcast, episodeId);
  }

  render() {
    const { navigation, currentEpisode } = this.props;
    const podcast = navigation.getParam('podcast');

    return (
      <Container>
        <EpisodeList
          ListHeaderComponent={() => (
            <PodcastDetails>
              <Background source={{ uri: podcast.cover }} blurRadius={5} />
              {Platform.OS === 'android' && (
                <BackButton onPress={this.handleBack}>
                  <Icon name="arrow-back" size={24} color="#fff" />
                </BackButton>
              )}
              <Cover source={{ uri: podcast.cover }} />
              <PodcastTitle>{podcast.title}</PodcastTitle>
              <PlayButton onPress={() => this.handlePlay()}>
                <PlayButtonText>Reproduzir</PlayButtonText>
              </PlayButton>
            </PodcastDetails>
          )}
          data={podcast.tracks}
          keyExtractor={episode => String(episode.id)}
          renderItem={({ item: episode }) => (
            <Episode onPress={() => this.handlePlay(episode.id)}>
              <Title active={currentEpisode && currentEpisode.id === episode.id}>
                {episode.title}
              </Title>
              <Author>{episode.artist}</Author>
            </Episode>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  currentEpisode: player.podcast
    ? player.podcast.tracks.find(episode => episode.id === player.current)
    : null,
});

const mapDipatchToProps = dispatch => bindActionCreators(PlayerActions, dispatch);

export default connect(mapStateToProps, mapDipatchToProps)(Podcast);
