import { createAppContainer,createStackNavigator,createDrawerNavigator } from "react-navigation";
import { connect } from "react-redux";
import Home from "../components/Home";
import SideMenu from "./SideMenu";


export const RootNavigator=createDrawerNavigator({
    Home:{screen:Home},
    
},

{
  contentComponent: SideMenu,
}
);

const AppContainer=createAppContainer(RootNavigator);

export default AppContainer;    