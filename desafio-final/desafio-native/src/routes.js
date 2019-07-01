import { createAppContainer, createStackNavigator } from 'react-navigation';

import Splash from '~/pages/Splash';
import Login from '~/pages/Login';
import SignUp from '~/pages/SignUp';
import Home from '~/pages/Home';
import Flavour from '~/pages/Flavour';
import Size from '~/pages/Size';
import Cart from '~/pages/Cart';
import Checkout from '~/pages/Checkout';
import Orders from '~/pages/Orders';

const Routes = createAppContainer(createStackNavigator({
  Splash,
  Login,
  SignUp,
  Home,
  Orders,
  Checkout,
  Cart,
  Size,
  Flavour,
}, {
  headerMode: 'none',
}));

export default Routes;
