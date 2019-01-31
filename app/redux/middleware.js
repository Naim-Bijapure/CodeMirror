var RNFS = require("react-native-fs");

import { getLanguage, languageMenuItems, folderMenuItems, getFolder } from "../containers/Lists";


const currentLanguage=languageMenuItems[0];
const currentFolder=folderMenuItems[0];


const MiddleWare = store => next => action => {
    /*
    Pass all actions through by default
    */
    next(action)
    switch (action.type) {
        case 'UPDATE_CODE':
                RNFS.readFileAssets(`Ncodes/${getFolder(currentFolder.folder)}/${getLanguage(currentLanguage.language)}`)
                .then((data) => {
                    alert('i m middleware');
                  return  next({
                        type: 'UPDATE_CODE',
                        payload: data
                    })  
                })
                .catch((err) => {
                    alert(err);
                    return next({
                        type: 'err',
                        err
                    })

                }
                );

                break;


        /*
      Do nothing if the action does not interest us
      */
        default:
            break
    }
}

export default MiddleWare;