var RNFS = require("react-native-fs");
import { getLanguage, languageMenuItems, folderMenuItems, getFolder } from "./Lists";
import { store } from "../../App";
class CodeService {
    constructor() {
        this.currentLanguage = languageMenuItems[0];
        this.currentFolder = folderMenuItems[0];
        this.currentScreen="SCREEN_1"
        this.screen=[{type:'SCREEN_1',language:'Javascript'},{type:'SCREEN_2',language:'Python'}]
    }

    UpdateLanguage(languageData) {
        this.currentLanguage = languageData.language;
        languageData.type=='SCREEN_1'?
                            this.screen[0]['language']=this.currentLanguage.language
                            :this.screen[1]['language']=this.currentLanguage.language;
        
    }
    UpdateFolder(name) {
        this.currentFolder = name;
    }

    // ? to read the files 
    GetCode(View) {
        var that = this;
        return function (dispatch) {
            if(View=="SCREEN_1"){
                
                return RNFS.readFileAssets(`Ncodes/${getFolder(that.currentFolder.folder)}/${getLanguage(that.screen[0].language)}`)
                .then((data) => { dispatch({ type: 'UPDATE_CODE_TEST', payload: {view:View, folder: that.currentFolder.folder, language: that.currentLanguage.language, data: data } }) });
            }else{
                return RNFS.readFileAssets(`Ncodes/${getFolder(that.currentFolder.folder)}/${getLanguage(that.screen[1].language)}`)
                .then((data) => { dispatch({ type: 'UPDATE_CODE_TEST', payload: {view:View, folder: that.currentFolder.folder, language: that.currentLanguage.language, data: data } }) });
                
            }

        }
    }
    
    UpdateScreen(screen){
        this.currentScreen=screen;
    }
    // UpdateTab(){ 
    //     alert(this.currentScreen);
    //     this.currentScreen=='SCREEN_1'?this.GetCode('SCREEN_1'):this.GetCode('SCREEN_2');
    // }


    UpdateOtherScreen(screenType){
    
        store.dispatch(this.GetCode(screenType));
    // console.log('current store state is ',store.getState());
            

    }

}

let codeSerive = new CodeService();
export default codeSerive;