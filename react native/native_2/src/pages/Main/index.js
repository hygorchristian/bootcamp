import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Container, PodcastList, PageTitle, Podcast, Cover, Title, Count, Info,
} from './styles';
import { PodcastsActions } from '../../store/ducks/podcasts';
import { ExampleActions } from '../../store/ducks/example';

class Main extends React.Component {
  componentWillMount() {
    // const { loadPodcastsRequest } = this.props;
    console.tron.log(this.props);
    // loadPodcastsRequest();
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
            <Podcast onPress={() => {}}>
              <Cover source={{ uri: podcast.cover }} />
              <Info>
                <Title>{podcast.title}</Title>
                <Count>{`${podcast.tracks.length} episódios`}</Count>
              </Info>
            </Podcast>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = ({ podcasts }) => ({
  podcasts,
});

const mapDipatchToProps = dispatch => bindActionCreators({
  ...PodcastsActions, ...ExampleActions
}, dispatch);

export default connect(mapStateToProps, mapDipatchToProps)(Main);
