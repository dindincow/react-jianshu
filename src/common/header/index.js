import React,{Component} from "react";
import {HeaderWrapper,Logo,Nav,NavItem,NavSreach,Addition,Button,SearchWraper} from "./style"
class Header extends Component{
    render(){
        return(
            <HeaderWrapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className="left active">首頁</NavItem>
                    <NavItem className="left">IT技術</NavItem>
                    <SearchWraper>
                        <NavSreach></NavSreach>
                        <i class="iconfont">&#xe600;</i>
                    </SearchWraper>
                    <NavItem className="right"><i class="iconfont">&#xe602;</i></NavItem>
                    <NavItem className="right">登入</NavItem>
                </Nav>
                <Addition>
                    <Button className="reg">註冊</Button>
                    <Button className="write"><i class="iconfont">&#xe601;</i>寫文章</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header;