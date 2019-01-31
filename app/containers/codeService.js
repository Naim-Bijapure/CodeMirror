var RNFS = require("react-native-fs");
import { getLanguage, languageMenuItems, folderMenuItems, getFolder } from "../containers/Lists";


var currentLanguage=languageMenuItems[0];
var currentFolder=folderMenuItems[0];

function GetCode(){
    
    return function (dispatch) {
       
        
        return RNFS.readFileAssets(`Ncodes/${getFolder(currentFolder.folder)}/${getLanguage(currentLanguage.language)}`)
              .then((data)=>{dispatch({type:'UPDATE_CODE',payload:{folder:currentFolder.folder,language:currentLanguage.language,data:data}})})
              .then(()=>{
                currentLanguage=languageMenuItems[0];
                currentFolder=folderMenuItems[0];
            
            })
              ;
  
    }
  }

function UpdateLanguage(language,){
    currentLanguage=language;
    return GetCode();
}
function UpdateFolder(folder) {
    currentFolder=folder;
    return GetCode();
}

  export {GetCode,UpdateLanguage,UpdateFolder}