

import {fromJS} from 'immutable';
import * as constants from "./constants";
const defaultState = fromJS({
    topicList:[],
    articleList:[],
    showScroll:true
})

export default(state=defaultState,action)=>{
    switch(action.type){
        
        case constants.CHANGE_HOME_DATA: 
            return state.merge({
                topicList:fromJS(action.topicList),
                articleList:fromJS(action.articleList),
            })
        case constants.ADD_ARTICEL_LIST:
            return state.set('articleList',state.get('articleList').concat(action.list))

        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show)
        
        default:
            return state;
    }

}