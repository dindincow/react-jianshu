import React,{Component} from "react";
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import {
    HeaderWrapper,
    SearchInfor,
    Logo,
    Nav,
    NavItem,
    NavSreach,
    Addition,
    Button,
    SearchWraper,
    SearchInforTitle,
    SearchInforSwitch,
    SearchInforItem
} from "./style"
import {actionCreators} from "./store";


class Header extends Component{

    getListArea(){

        const {focused,list} = this.props;
        if(focused){
            return (
                <SearchInfor>
                    <SearchInforTitle>熱門搜索
                        <SearchInforSwitch>換一批</SearchInforSwitch>
                    </SearchInforTitle>
                    <div>
                        {
                            list.map(item=>{
                                return <SearchInforItem key={item}>{item}</SearchInforItem>
                            })
                        } 
                    </div>
                </SearchInfor>
            ) 
        }else{
            return null;
        }
        
    }
    render(){
        const {focused,handleInputFocus,handleInputBlur} = this.props;
        return (
            <HeaderWrapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className="left active">首頁</NavItem>
                    <NavItem className="left">IT技術</NavItem>
                    <SearchWraper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSreach 
                                className={focused ? 'focused' : ''}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            >
                            </NavSreach>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe600;</i>
                        {this.getListArea()}
                    </SearchWraper>
                    <NavItem className="right"><i className="iconfont">&#xe602;</i></NavItem>
                    <NavItem className="right">登入</NavItem>
                </Nav>
                <Addition>
                    <Button className="reg">註冊</Button>
                    <Button className="write"><i className="iconfont">&#xe601;</i>寫文章</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        focused:state.get('header').get('focused'),
        list:state.get('header').get('list')
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        handleInputFocus(){
            dispatch(actionCreators.getList())
            dispatch(actionCreators.search_focus())
        },
        handleInputBlur(){
           
            dispatch(actionCreators.search_blur())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);