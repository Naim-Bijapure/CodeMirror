import React, { Component } from "react";
import { Image,Linking} from "react-native";
import {
  Container,
  Header,
  Title,
  Subtitle,
  Right,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body
} from "native-base";
import styles from "../containers/styles";
export default class CardShowcaseExample extends Component {
    handleClick(){
        Linking.openURL('https://naim-bijapure.github.io/').catch((err) => console.error('An error occurred', err));
        
    }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={()=>( this.props.navigation.navigate('Home'))}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Code Mirror</Title>
            <Subtitle>About</Subtitle>
          </Body>
          <Right />
        </Header>

        <Content>
          <Card style={{ display:'flex',flexDirection:'column',alignItems:'center' }}>

                    <Image source={{uri :'asset:/images/logo.png'}}   style={{ width: 290, height:210,bottom:50, transform: [{ scale: 0.4 }] }} >
                    </Image>
                    <Body style={{bottom:100}}>
                    <Text note>Version 1.0.0</Text> 
                    <Text style={styles.PrimaryColor}>Code Mirror</Text> 
                    <Text note>Developed By</Text>
                    <Text style={styles.PrimaryColor}>Naim Bijapure</Text>
                    <Text note>To Contact Visit</Text>
                   <Text onPress={this.handleClick}  style={styles.PrimaryColor} >naim-bijapure.github.io</Text> 
                    </Body>
 
 
                  
           </Card>
        </Content>
      </Container>
    );
  }
}
