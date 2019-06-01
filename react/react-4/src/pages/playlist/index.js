import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';
import { Creators as PlayerActions } from '../../store/ducks/player';

import Loading from '../../components/Loading';

class Playlist extends Component {
  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;
    this.props.getPlaylistDetailsRequest(id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) this.loadPlaylistDetails();
  }

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  renderDetails = () => {
    const { playlistDetails, loadSong } = this.props;
    const playlist = playlistDetails.data;

    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt="cover" />
          <div>
            <span>Playlist</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && (
              <p>
                {playlist.songs.length}
                {' '}
                música
                {playlist.songs.length !== 1 && <>s</>}
              </p>
            )}
            <button type="button">Play</button>
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <th>dd</th>
            <th>Título</th>
            <th>Artista</th>
            <th>Álbum</th>
            <th><img src={ClockIcon} alt="duracao" /></th>
          </thead>

          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>Nenhuma música cadastrada</td>
              </tr>
            ) : (
              playlist.songs.map(song => (
                <tr key={song.id} onDoubleClick={() => loadSong(song)}>
                  <td><img src={PlusIcon} alt="adicionar" /></td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>3:06</td>
                </tr>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  }

s

  render() {
    const { playlistDetails } = this.props;

    return playlistDetails.loading ? (
      <Container loading><Loading /></Container>
    ) : this.renderDetails();
  }
}

const mapStateToProps = ({ playlistDetails }) => ({
  playlistDetails
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...PlaylistDetailsActions, ...PlayerActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
