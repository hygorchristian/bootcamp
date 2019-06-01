import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import { Container, NewPlaylist, Nav } from './styles';
import addPlaylistIcon from '../../assets/images/add_playlist.svg';
import Loading from '../Loading';

class Sidebar extends Component {
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
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
            </li>
            <li>
              <a href="">Rádio</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <a href="">Seu Daily Mix</a>
            </li>
            <li>
              <a href="">Tocados Recentemente</a>
            </li>
            <li>
              <a href="">Músicas</a>
            </li>
            <li>
              <a href="">Álbuns</a>
            </li>
            <li>
              <a href="">Artistas</a>
            </li>
            <li>
              <a href="">Estações</a>
            </li>
            <li>
              <a href="">Arquivos Locais</a>
            </li>
            <li>
              <a href="">Arquivos Locais</a>
            </li>
            <li>
              <a href="">Vídeos</a>
            </li>
            <li>
              <a href="">Podcasts</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>PLAYLISTS</span>
              {
                playlists.loading && <Loading />
              }
            </li>
            {
              playlists.data.map(playlist => (
                <li key={playlist.id}>
                  <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
                </li>
              ))
            }

          </Nav>
        </div>
        <NewPlaylist>
          <img src={addPlaylistIcon} alt="Adicionar Playlist" />
          Nova Playlist
        </NewPlaylist>
      </Container>

    );
  }
}

const mapStateToProps = ({ playlists }) => ({
  playlists
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
