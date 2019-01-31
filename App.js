/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// ? system
import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
var RNFS = require("react-native-fs");

// ? user defined
import AppContainer, { RootNavigator } from "./app/navigation/MainDrawer";
import Home from "./app/components/Home";
import AppNavigation from "./app/navigation/AppNavigation";
import GetFile from "./app/redux/middleware";
import ConfigureStore from "./app/redux/reducers/ConfigureStore";
// import store from "./app/redux/Store";

type Props = {};
export const store=ConfigureStore();


export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation></AppNavigation>
      </Provider>


    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
