import React,{PureComponent} from "react";
import {HomeWrapper,HomeRight,HomeLeft,BackTop} from "./style";
import {connect} from "react-redux";
import {actionCreators} from './store';
import axios from 'axios';
import List from "./components/List";
import Recommend from "./components/Recommend"
import Topic from "./components/Topic"
import Writer from "./components/Writer"
class Home extends PureComponent{
    handleScrollTop(){
        window.scrollTo(0,0)
    }
    render(){
        return (
            <HomeWrapper> 
                <HomeLeft>
                    <img style={{width:"100%"}} alt='' src="https://blog.shopline.tw/wp-content/uploads/2019/08/banner-6-skills-enhance-click-top-banner-n.png"/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                { 
                    this.props.showScroll ?  <BackTop onClick={this.handleScrollTop}>回到頂部</BackTop> :null
                }
               
            </HomeWrapper>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        this.bindEvent()
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)   
    }

   
    bindEvent(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)   
    }
}
const mapStateToProps = (state)=>{
    return{
        showScroll:state.get('home').get('showScroll'),
    }
}

const mapDispatchToProps = (dispatch)=>{
    console.log("11111")
    return{
        changeHomeData(){
            const action = actionCreators.getHomeInfo();
            dispatch(action)   
        },
        changeScrollTopShow(){
            if(document.documentElement.scrollTop > 400){
                dispatch(actionCreators.toggleTopShow(true))   
            }else{
                dispatch(actionCreators.toggleTopShow(false))   
            }   
        }
       
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);