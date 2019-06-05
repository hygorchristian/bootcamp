import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Container, PodcastList, PageTitle, Podcast, Cover, Title, Count, Info,
} from './styles';
import { PodcastsActions } from '../../store/ducks/podcasts';

class Main extends React.Component {
  handlePodcastPress = (podcast) => {
    const { navigation } = this.props;

    navigation.navigate('Podcast', { podcast });
  }

  componentWillMount() {
    const { loadPodcastsRequest } = this.props;
    loadPodcastsRequest();
  }

  render() {
    const { podcasts } = this.props;
    return (
      <Container>
        <PodcastList
          ListHeaderComponent={() => <PageTitle>Podcasts</PageTitle>}
          data={podcasts.data}
          keyExtractor={podcast => String(podcast.id)}
          renderItem={({ item: podcast }) => (
            <Podcast onPress={() => this.handlePodcastPress(podcast)}>
              <Cover source={{ uri: podcast.cover }} />
              <Info>
                <Title>{podcast.title}</Title>
                <Count>{`${podcast.tracks.length} episódios`}</Count>
              </Info>
            </Podcast>
          )}
          refreshing={podcasts.loading}
          onRefresh={() => {}}
        />
      </Container>
    );
  }
}

const mapStateToProps = ({ podcasts }) => ({
  podcasts,
});

const mapDipatchToProps = dispatch => bindActionCreators({
  ...PodcastsActions,
}, dispatch);

export default connect(mapStateToProps, mapDipatchToProps)(Main);
