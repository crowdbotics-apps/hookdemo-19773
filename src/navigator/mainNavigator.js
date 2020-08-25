import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial94143Navigator from '../features/Tutorial94143/navigator';
import NotificationList94115Navigator from '../features/NotificationList94115/navigator';
import Settings94114Navigator from '../features/Settings94114/navigator';
import Settings94106Navigator from '../features/Settings94106/navigator';
import UserProfile94104Navigator from '../features/UserProfile94104/navigator';
import BlankScreen094082Navigator from '../features/BlankScreen094082/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial94143: { screen: Tutorial94143Navigator },
NotificationList94115: { screen: NotificationList94115Navigator },
Settings94114: { screen: Settings94114Navigator },
Settings94106: { screen: Settings94106Navigator },
UserProfile94104: { screen: UserProfile94104Navigator },
BlankScreen094082: { screen: BlankScreen094082Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
