import * as constants from "./constants";
import {fromJS, isImmutable} from 'immutable';

const defaultState = fromJS({
    focused:false,
    list:[],
    mouseIn:false,
    page:1,
    totalPage:1
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
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            })  
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case constants.CHANGE_PAGE:
            return state.set('page',action.pageNum)
        default:
            return state;
    }

}