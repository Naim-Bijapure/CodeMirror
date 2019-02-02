import React, { Component } from "react";
import { View, ScrollView, TouchableNativeFeedback, SafeAreaView, StyleSheet, ImageBackground, Image, Platform } from "react-native";
// import { DrawerItems } from "react-navigation";
import { Container, Header, Content, Button, Text, Badge,Right,Icon } from 'native-base';
import { connect } from "react-redux";
import { DrawerActions } from 'react-navigation';
import { Folder, Language, languageMenuItems, folderMenuItems } from "../containers/Lists";
// import { UpdateFolder } from "../containers/codeService";
import codeService from "../containers/CodeService";
import Screen1 from "../components/Screen1";
class SideMenu extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }




    render() {
        const folderList = folderMenuItems.map((folder) => {
            return (
            <TouchableNativeFeedback
                key={folder.folder}
                onPress={() => {
                    this.props.navigation.dispatch(DrawerActions.closeDrawer());
                    codeService.UpdateFolder(folder);
                    codeService.currentScreen == "SCREEN_1" ? this.props.GetLanguage1() : this.props.GetLanguage2();
                    codeService.currentScreen=="SCREEN_1"?codeService.UpdateOtherScreen("SCREEN_2"):codeService.UpdateOtherScreen("SCREEN_1");
                }}
                >

                <View style={styles.button}  >
                    <Text style={styles.buttonText} > {folder.text}</Text>
                    <Right style={styles.icon}>
                    <Icon name="arrow-forward" style={{color:'#ddd9da',right:10}} />
                  </Right>
                </View>
            </TouchableNativeFeedback>
            )


        });





        return (
            <Container>
                <View style={styles.headerContainer}>
                    <ImageBackground source={require('../assests/rect4661.png')} style={{ flex: 1, width: 290,height:210,top:-23, justifyContent: 'center' ,transform: [{ scale: 0.6 }],flexDirection:'row' }} >
                        {/* <Text style={styles.headerText}>Naim Bijapure</Text> */}
                    </ImageBackground>
                    
                    
                 <Text style={styles.headerText}>Developed By :- Naim Bijapure</Text>
                 <Text style={styles.headerText}>Naimbijapure7407@gmail.com</Text>
                </View>
                <Content>
                    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                        <View style={styles.container}>

                            <View style={styles.screenContainer}>
                                {folderList}
                            </View>
                        </View>
                    </SafeAreaView>
                </Content>
            </Container>
            );



    } // ! end of render

    getFile() {
        alert(this.props.data);

    }


}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    headerContainer: {
        height: 180,
        backgroundColor:'#cfcfcf'
    },
    headerText: {
        color: '#5c5c5c',
        marginLeft:10
        },

    screenContainer: {
        paddingTop: 2
    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    screenTextStyle: {
        fontSize: 20,
        marginLeft: 20
    },
    button: {
        marginBottom: 1,
        width: 270,
        alignItems: 'flex-start',
        backgroundColor: '#3f51b5',
        display:'flex',
        flexDirection:'row'
    },
    buttonText: {
        padding: 10,
        color: '#ddd9da'
    },
    icon:{
        alignItems:'flex-end',
        color:'#ddd9da'

    }

});

function mapStateToProps(state) {

    return {
        data: state.data
    }
}
function mapDispatchToProps(dispatch) {
    return {
        GetFolder: (folder) => { return dispatch(UpdateFolder(folder)) },
        GetLanguage1: () => ( dispatch(codeService.GetCode('SCREEN_1'))),
        GetLanguage2: () => (dispatch(codeService.GetCode('SCREEN_2')))

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
