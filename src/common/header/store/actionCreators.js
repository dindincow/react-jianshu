import * as constants from "./constants";
import {fromJS} from 'immutable';
import axios from 'axios';


const changeList = (data)=>({
    type:constants.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/5)
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

export const mouseEnter = ()=>({
    type:constants.MOUSE_ENTER
})
export const mouseLeave = ()=>({
    type:constants.MOUSE_LEAVE
})
export const changePage = (pageNum)=>({
    type:constants.CHANGE_PAGE,
    pageNum
})







