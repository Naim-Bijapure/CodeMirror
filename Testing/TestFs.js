import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
var RNFS = require("react-native-fs");
class TestFs extends Component {
  constructor(props) {
    super(props);
    this.state = {data:'default'};
    // this.MyFiles= this.MyFiles.bind(this);
  }
  CreateFile(params) {
    var path = RNFS.ExternalDirectoryPath + "/nnn.txt";
    // write the file
    RNFS.writeFile(path, "Lorem ipsum dolor sit amet", "utf8")
    .then(success => {
        console.log("FILE WRITTEN!");
        // alert("file is created in your phone dirrectroy");
        alert(path);
    })
      .catch(err => {
          alert(err);
        console.log(err.message);
      });
  }
  ReadFile(){
    
    RNFS.readFileAssets('Ncodes/loops/example.py')
    .then((res) => {
        alert(res);
        // this.setState({data:res});
        this.setState({data:res});
    })
    .catch((err)=>{alert(err)});
    }

  render() {
    return (
      <View>
        <Text>Testing the files</Text>
        <Button title="create file" onPress={this.CreateFile.bind(this)} />
        <Button title="Read file file" onPress={this.ReadFile.bind(this)} />
        <Text> content of the file is    {this.state.data}</Text>
    
      </View>
    );
  }
  componentDidMount() {
  }
}

export default TestFs;
