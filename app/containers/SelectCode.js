import {createSelector} from 'reselect'

// normal selector 
const getData=(state)=>state;

const SelectCode=createSelector([getData],function (state) {
    console.log('this is selector');
    
   return state; 
});
export {SelectCode}