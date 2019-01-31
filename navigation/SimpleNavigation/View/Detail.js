import React, { Component } from "react";
import { View, Text } from "react-native";
import {  } from "react-navigation";
class Detail extends Component {
    static navigationOptions=({navigation})=>{
        return{
          title:'Detail'
        }
    }
    constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>This is Detail</Text>
      </View>
    );
  }
}

export default Detail;
