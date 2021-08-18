import React,{PureComponent} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom"
import axios from 'axios';


class Write extends PureComponent{
    
    render(){
        const {loginState} = this.props;
        if(loginState){
            return (
                <div>
                    寫文章頁面
                </div>
            )
        }else{
            return <Redirect to="/login"/>
        }
       
    }
   
}
const mapStateToProps = (state)=>({
    loginState:state.get('login').get('login')
})


   

export default connect(mapStateToProps,null)(Write);