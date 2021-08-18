import * as constants from "./constants";
import {fromJS} from 'immutable';
import axios from 'axios';


const changeLogin = ()=>({
    type:constants.CHANGE_LOGIN,
    value:true 
})


export const logout = ()=>({
    type:constants.LOG_OUT,
    value:false 
})

export const login = (account,password)=>{
    return(dispatch)=>{
        axios.get(`/api/login.json?account=${account}&password?${password}`).then(res=>{
            const result = res.data.data;
            console.log('result',result)
            if(result){
                dispatch(changeLogin())
            }
        })
    }
}