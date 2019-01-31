import {_,  uniqBy} from "lodash";

var LanguageStates=[];

function  handleFile2(state,action) {
    switch (action.type) {
        case 'UPDATE_SCREEN2':
        alert('handleFile2');
        return{data2:action.payload.data}
        break;

        case 'UPDATE_SCREEN1':
        LanguageStates.push(action.payload);
        return LanguageStates ;
        break;


        
        case 'UPDATE_CODE':
        LanguageStates.push(action.payload);
        var newLanguageStates=_.uniqBy(LanguageStates,"language");
        return newLanguageStates ;
        break;

    
      default:
       return LanguageStates;
        break;
    }
    
  }
  
  export {handleFile2}