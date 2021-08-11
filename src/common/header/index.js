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
        const {focused,list,mouseIn,page,totalPage,handelMouseEnter,handelMouseLeave,handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];
        if(newList.length > 0){
            for(let i = (page-1) * 5; i < page * 5 ; i++){
                if(i<newList.length){
                    pageList.push(<SearchInforItem key={newList[i]}>{newList[i]}</SearchInforItem>)
                }
                
            }
    
        }
        if(focused || mouseIn){
            return (
                <SearchInfor onMouseEnter={handelMouseEnter} onMouseLeave={handelMouseLeave}>
                    <SearchInforTitle>熱門搜索
                        <SearchInforSwitch onClick={()=>{handleChangePage(page,totalPage,this.spinIcon)}}>
                        <i ref={ (icon) =>{ this.spinIcon = icon}} className="iconfont spin">&#xe8e7;</i>換一批
                        </SearchInforSwitch>
                    </SearchInforTitle>
                    <div>
                        {pageList} 
                    </div>
                </SearchInfor>
            ) 
        }else{
            return null;
        }
        
    }
    render(){
        const {focused,handleInputFocus,handleInputBlur,list} = this.props;
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
                                onFocus={()=>{handleInputFocus(list)}}
                                onBlur={handleInputBlur}
                            >
                            </NavSreach>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe600;</i>
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
        list:state.get('header').get('list'),
        page:state.get('header').get('page'),
        totalPage:state.get('header').get('totalPage'),
        mouseIn:state.get('header').get('mouseIn')
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        handleInputFocus(list){
            if(list.size === 0){
                dispatch(actionCreators.getList())
            }    
            dispatch(actionCreators.search_focus())
        },
        handleInputBlur(){
            dispatch(actionCreators.search_blur())
        },
        handelMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handelMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page,totalPage,spin){
            // spin.style.transform = 'rotate(360deg)'
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle,10)
            }else{
                originAngle = 0;
            }

            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'



            if(page < totalPage){
                dispatch(actionCreators.changePage(page+1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
            
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);