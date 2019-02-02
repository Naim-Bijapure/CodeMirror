import React, { Component } from "react";
import { Button, Title, Content, Footer, FooterTab, Tab, Tabs, ScrollableTab, Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Right } from 'native-base';
import { connect } from "react-redux";
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';

import styles from "../containers/styles";
import Screen1 from "./Screen1";
import Screen2 from "./Screen2";
import codeSerive from "../containers/CodeService";
import { DrawerActions } from 'react-navigation';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        { key: 'first', title: "< Code 1 />" },
        { key: 'second', title: '<Code 2 />' },
      ],
    };

  }
  _handleIndexChange = index => {
    this.setState({ index });
    index == 1 ? codeSerive.UpdateScreen("SCREEN_2") : codeSerive.UpdateScreen("SCREEN_1");
  };

  _renderScene = SceneMap({
    first: Screen1,
    second: Screen2,
  });


  render() {

    return (
      <Container >
        <Header style={{ height: 45 }} >
          <Left>
            <Button transparent onPress={this.props.navigation.openDrawer}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Code Mirror</Title>
          </Body>
          <Right />
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
    // this.props.UpdataCode();
    this.props.navigation.dispatch(DrawerActions.openDrawer());
    setTimeout(() => {
      this.props.navigation.dispatch(DrawerActions.closeDrawer());

    }, 50);
  }










} //! end of class

// ?redux states

function mapStateToProps(state) {
  return {
    data: state
  }
}
function mapDispatchToProps(dispatch) {
  return {
    UpdataCode: () => (dispatch(GetCode())),
    GetTestLanguage: () => (dispatch(codeSerive.GetCode('SCREEN_2')))

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
