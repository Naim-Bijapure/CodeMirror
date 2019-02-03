function  handleFile(state,action) {
    switch (action.type) {
        case 'UPDATE_CODE':
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
        
        

        
    
  