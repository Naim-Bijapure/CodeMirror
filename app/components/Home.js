import React, { Component } from "react";
import { Button, Title,  Container, Header,Left, Body, Icon, Right } from 'native-base';
import {Share} from 'react-native'
import { connect } from "react-redux";
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { DrawerActions } from 'react-navigation';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import {Text} from 'react-native'
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import codeSerive from "../containers/CodeService";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: "<Code 1/>" },
        { key: 'second', title: '<Code 2/>' },
      ],
    };
   this.navigate=null;
  }//constructor end

  // about share menu 
       _menu = null;

    setMenuRef = ref => {
      this._menu = ref;
    };
  
    hideMenu = () => {
      this.navigate('About');
      this._menu.hide();
    };
  
    showMenu = () => {
      this._menu.show();
    };
 


  _handleIndexChange = index => {
    this.setState({ index });
    index == 1 ? codeSerive.UpdateScreen("SCREEN_2") : codeSerive.UpdateScreen("SCREEN_1");
  };

  _renderScene = SceneMap({
    first: Screen1,
    second: Screen2,
  });

//Share option
async onShare(){
  try {
    const result = await Share.share({
      message:
        'CodeMirror is an awesome app to learn programming languages download it now :- https://www.google.com',
      })

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};




  render() {
     const { navigate } = this.props.navigation;
     this.navigate=navigate;
    return (
      <Container >
        <Header style={{ height: 45 }} >
          <Left>
            <Button transparent onPress={this.props.navigation.openDrawer}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Code Mirror </Title>
          </Body>
          <Right >
             <Button transparent onPress={this.showMenu}>
              <Icon name='more' />
            </Button>
              {/* about share menu */}
              <Menu
                ref={this.setMenuRef}
                button={<Text onPress={this.showMenu}> </Text>}
                >
                
                <MenuItem onPress={ this.hideMenu}>About</MenuItem>
                <MenuDivider />
                <MenuItem onPress={this.onShare}  >Share <Icon name="share" style={{fontSize:17 ,color:'blue'}} /></MenuItem>
              </Menu>
                

          </Right>
        </Header>


        <TabView
          navigationState={this.state}
          renderScene={this._renderScene}
          onIndexChange={this._handleIndexChange}
          tabBarPosition={"bottom"}
          renderTabBar={props =>
            <TabBar {...props}
              style={{ backgroundColor: '#3f51b5', height: 45 }}
              indicatorStyle={{ backgroundColor: 'white' }}
            labelStyle={{ fontSize: 16,bottom:4 }}


            />}

        />
      </Container>


    );

  } //! end render()


  componentDidMount() {
    this.props.navigation.dispatch(DrawerActions.openDrawer());
    setTimeout(() => {
      this.props.navigation.dispatch(DrawerActions.closeDrawer());

    }, 50);
  }










} //! end of class

// ?redux states


export default connect()(Home);
