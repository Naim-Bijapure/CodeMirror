import {_,  uniqBy} from "lodash";

var LanguageStates=[];

function  handleFile(state,action) {
    switch (action.type) {
        case 'UPDATE_SCREEN2':
        
        LanguageStates.push(action.payload);
        return LanguageStates ;
        break;

        case 'UPDATE_SCREEN1':
        alert('handleFile');
        return {data:action.payload.data}
        break;


        
        case 'UPDATE_CODE':
        LanguageStates.push(action.payload);
        
        var newLanguageStates=_.uniqBy(LanguageStates,"data");
        return newLanguageStates ;
        break;

        case 'UPDATE_CODE_TEST':
        return {
            ...action.payload
        }
        break;
        
      default:
       return {view:'',folder:'',language:'',data:''};
        break;
    }
    
  }
  
  export {handleFile}