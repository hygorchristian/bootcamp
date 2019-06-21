import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '~/pages/Login';
import SignUp from '~/pages/SignUp';
import Home from '~/pages/Home';
import Flavour from '~/pages/Flavour';
import Size from '~/pages/Size';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';

const Routes = createAppContainer(createSwitchNavigator({
  Checkout,
  Cart,
  Size,
  Flavour,
  Home,
  Login,
  SignUp,
}));

export default Routes;
