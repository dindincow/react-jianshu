import * as constants from "./constants";
import {fromJS, isImmutable} from 'immutable';
import axios from 'axios';


const changeList = (data)=>({
    type:constants.CHANGE_LIST,
    data:fromJS(data)
})


export const search_focus = ()=>({
    type:constants.SEARCH_FOCUS
})

export const search_blur = ()=>({
    type:constants.SEARCH_BLUR
})

export const getList = ()=>{
    return(dispatch)=>{
        axios.get('/api/headerList.json')
        .then(function (response) {
            const data = response.data;
            dispatch(changeList(data.data))
        })
    }
}


