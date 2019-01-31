import React, { Component } from 'react';
import { connect } from "react-redux";
import { Platform,View } from "react-native";
import { Container,Badge,Icon,  Left, Right, Form, Picker, Button, Header, Content, Card, CardItem, Text, Body } from 'native-base';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import { atomDark, atomOneDark, vs, prism, funky, dark, darcula, okaidia, coy, solarizedlight } from 'react-syntax-highlighter/styles/prism';
// import Icon from 'react-native-vector-icons/Ionicons';
import { languageMenuItems, Language } from '../containers/Lists';
import codeService from '../containers/CodeService';
import styles from "../containers/styles";

class Screen1 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: 'JavaScript',
      language: undefined
    };
    this.CurrentLanguage = {}
    this.currentTabLanguage = "";
  }
  onValueChange(value) {

    this.setState({
      selected: value,
    });
    var language = { language: value, text: value }
    let LanguageData={type:'SCREEN_1',language:language}
    codeService.UpdateLanguage(LanguageData);
    this.props.GetLanguage();

  }

  render() {

    // this will return the current language object
    this.props.data.view == 'SCREEN_1' ? this.CurrentLanguage = { ...this.props.data } : "";

    return (
      <Container>
        <Content>
      
          <Form >
          
          <Badge info style={{ position:'absolute',top:8,left:5,flexWrap:"wrap"}}>
          <View  >

          <Text >{codeService.currentFolder.text}</Text>
          </View>
          </Badge>
          <Icon name="arrow-dropdown-circle" style={{position:'absolute',left:330,top:6,color:'#3f51b5',zIndex:12}}/>
            <Picker
  
              mode="dropdown"
              placeholder="language"
              textStyle={{ color: "#5cb85c",left:50 }}
              itemStyle={{
                
                  backgroundColor: 'green',
                  marginLeft: 0,
                  paddingLeft: 15
               
             
              }}
              itemTextStyle={{ fontSize: 18, color: 'blue' }}
              style={{ width: 180, height: 40, marginLeft: 230,backgroundColor:'white' }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}

            >
              {languageMenuItems.map((language) => {
                return <Picker.Item key={language.text} label={language.text} value={language.language}  />

              })}
            </Picker>

          </Form>

          <SyntaxHighlighter
            language='javascript'
            style={darcula}
            highlighter={"prism" || "hljs"}>


            {this.CurrentLanguage.data ? this.CurrentLanguage.data : 'Loading'}
          </SyntaxHighlighter>

        </Content>
      </Container>
    );
  } //! render end
  componentDidMount() {
    this.onValueChange("JavaScript");

  }




}// ! class end
function mapStateToProps(state) {
  console.log(state);

  return {
    data: state
  }

}


function mapDispatchToProps(dispatch) {
  return {
    UpdateData: () => { return dispatch(GetCode()) },
    GetLanguage: (language) => (dispatch(UpdateLanguage(language))),
    GetLanguage: () => (dispatch(codeService.GetCode('SCREEN_1'))),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Screen1);

