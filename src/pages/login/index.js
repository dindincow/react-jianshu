import React,{PureComponent} from "react";
import {LoginWrapper,LoginBox,Input,Button} from "./style";
import {connect} from "react-redux";
import {actionCreators} from './store';
import axios from 'axios';
import {Redirect} from "react-router-dom"

class Login extends PureComponent{
    
    render(){
        const {loginState} = this.props;
        if(!loginState){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="帳號" ref={(input)=>{this.account = input}}/>
                        <Input placeholder="密碼" ref={(input)=>{this.password = input}}/>
                        <Button onClick={()=>{this.props.login(this.account,this.password)}}>登入</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to="/"/>
        }
       
    }
   
}
const mapStateToProps = (state)=>({
    loginState:state.get('login').get('login')
})

const mapDispatchToProps = (dispatch)=>({
    login(accountElement,passwordElement){
        dispatch(actionCreators.login(accountElement.value,passwordElement.value))
    }

})
   

export default connect(mapStateToProps,mapDispatchToProps)(Login);