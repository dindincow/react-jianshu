import React,{Component} from "react";
import {HeaderWrapper,Logo,Nav,NavItem,NavSreach,Addition,Button} from "./style"
class Header extends Component{
    render(){
        return(
            <HeaderWrapper>
                <Logo></Logo>
                <Nav>
                    <NavItem className="left active">首頁</NavItem>
                    <NavItem className="left">IT技術</NavItem>
                    <NavSreach></NavSreach>
                    <NavItem className="right">Aa</NavItem>
                    <NavItem className="right">登入</NavItem>
                </Nav>
                <Addition>
                    <Button className="reg">註冊</Button>
                    <Button className="write">寫文章</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header;