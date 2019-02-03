import { createAppContainer,createDrawerNavigator } from "react-navigation";
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