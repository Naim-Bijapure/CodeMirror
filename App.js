/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */
// ? system
import React, { Component } from "react";
import { Provider } from "react-redux";
var RNFS = require("react-native-fs");
import { Platform, StyleSheet, Text, View, StatusBar } from "react-native";

// ? user defined
import AppNavigation from "./app/navigation/AppNavigation";
import ConfigureStore from "./app/redux/reducers/ConfigureStore";

export const store=ConfigureStore();


export default class App extends Component {
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
