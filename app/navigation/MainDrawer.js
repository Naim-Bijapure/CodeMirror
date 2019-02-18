import { createAppContainer,createDrawerNavigator } from "react-navigation";
import Home from "../components/Home";
import SideMenu from "./SideMenu";
import About from "../components/about";


export const RootNavigator=createDrawerNavigator({
    Home:{screen:Home},
    About:{screen:About}
    
},

{
  contentComponent: SideMenu,
}
);

const AppContainer=createAppContainer(RootNavigator);

export default AppContainer;    