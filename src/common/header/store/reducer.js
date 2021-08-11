import * as constants from "./constants";
import {fromJS, isImmutable} from 'immutable';

const defaultState = fromJS({
    focused:false,
    list:[]
})

export default(state=defaultState,action)=>{
    switch(action.type){
        case constants.SEARCH_FOCUS:
            // Immutable 物件的set方法 會結合之前 Immutable物件的值
            // 和設置的值，返回一個全新物件
            return state.set('focused',true);
        case constants.SEARCH_BLUR:
            return state.set('focused',false);
        case constants.CHANGE_LIST:
            return state.set('list',action.data);
        default:
            return state;
    }

}