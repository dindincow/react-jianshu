import * as constants from "./constants";
import {fromJS} from 'immutable';
import axios from 'axios';

const addHomeList = (list)=> ({
    type:constants.ADD_ARTICEL_LIST,
    list:fromJS(list)
})

export const getHomeInfo = ()=>{
    return(dispatch)=>{
        axios.get('/api/home.json').then(res=>{
            const result = res.data.data;
            const action = {
                type:constants.CHANGE_HOME_DATA,
                topicList:result.topicList,
                articleList:result.articleList
            } 
            console.log("action11111111111=====>",action)
            dispatch(action) 
        })
    }
}

export const getMoreList = ()=>{
    return(dispatch)=>{
        axios.get('/api/homeList.json').then(res=>{
            const result = res.data.data;
            dispatch(addHomeList(result)) 
        })
    }
}
export const toggleTopShow = (show)=>({
    type:constants.TOGGLE_SCROLL_TOP,
    show
})


