import React, { Component } from 'react';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AuthActions } from '../../store/ducks/auth';

import {
 Container, Header, BrandContainer, Logo, Brand, Menu, Separator,
  AppInfo, UserName, SignOut, Orders, Notification, Content, Bag
} from './styles';
import logo from '../../assets/img/logo@3x.png';
import bag from '../../assets/img/bag.png';

class Dashboard extends Component {
  componentWillMount() {
    //
  }

  handleSignOut = (e) => {
    e.preventDefault();
    const { logout } = this.props;
    logout();
  }

  render() {
    return (
      <Container>
        <Header>
          <nav>
            <BrandContainer>
              <Logo src={logo} alt="logo" />
              <Brand>Pizzaria Don Juan</Brand>
            </BrandContainer>
            <Menu>
              <AppInfo>
                <UserName>Diego Fernandes</UserName>
                <SignOut onClick={this.handleSignOut}>Sair do app</SignOut>
              </AppInfo>
              <Separator />
              <Orders>
                <Bag src={bag} alt="Bag" />
                <div />
              </Orders>
            </Menu>
          </nav>
        </Header>
        <Content />
      </Container>
    );
  }
}

const mapStateToProps = ({ Auth }) => ({
  Auth
});

const mapDipatchToProps = dispatch => bindActionCreators({
  ...AuthActions
}, dispatch);

export default connect(mapStateToProps, mapDipatchToProps)(Dashboard);
