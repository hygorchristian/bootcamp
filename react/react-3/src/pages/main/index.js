import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as FavoritesActions from '../../store/actions/favorites';
import Footer from '../../components/footer';

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: PropTypes.func.isRequired,
    favorites: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      url: PropTypes.string
    })).isRequired
  }

  state = {
    repositoryInput: ''
  }

  handleAddRepository = (e) => {
    e.preventDefault();
    this.props.addFavoriteRequest(this.state.repositoryInput);
  };

  render() {
    const { repositoryInput } = this.state;
    const { favorites } = this.props;
    return (
      <div>
        <form onSubmit={this.handleAddRepository}>
          <input
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar</button>
        </form>

        <ul>
          {
            favorites.map(favorite => (
              <li key={favorite.id}>
                <p>
                  <strong>{favorite.name}</strong>
                  {' '}
                  {favorite.description}
                </p>
                <a href={favorite.url} target='_blank'>Acessar</a>
              </li>
            ))
          }
        </ul>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ favorites }) => ({
  favorites
});

const mapDispatchToProps = dispatch => bindActionCreators(FavoritesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
