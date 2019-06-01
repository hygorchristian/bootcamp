import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {
 Container, Title, List, Playlist
} from './styles';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';
import Loading from '../../components/Loading';

class Browse extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string
      }))
    }).isRequired
  }

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    const { playlists } = this.props;
    return (
      <Container>
        <Title>
Navegar
          { playlists.loading && <Loading /> }
        </Title>
        <List>
          {
            playlists.data.map(playlist => (
              <Playlist to={`/playlists/${playlist.id}`}>
                <img src={playlist.thumbnail} alt={playlist.title} />
                <strong>{playlist.title}</strong>
                <p>{playlist.description}</p>
              </Playlist>
            ))
          }
        </List>
      </Container>
    );
  }
}

const mapStateToProps = ({ playlists }) => ({
  playlists
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
