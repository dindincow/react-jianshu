
import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    height:56px;
    background:#fff;
    border-bottom:1px solid #ccc;
    
    position: relative;
`
/** 
export const Logo = styled.a`
    height:56px;
    width:100px;
    position:absolute;
    top:0;
    left:10px;
    background:url(${logoPic});
    background-size: contain;
`
*/

//也可換成這樣寫
export const Logo = styled.a.attrs({
    href:'/'
})`
    height:56px;
    width:100px;
    position:absolute;
    top:0;
    left:10px;
    background:url(${logoPic});
    background-size: contain;
`


export const Nav = styled.div`
    margin:0 auto;
    width:960px;
    height: 56px; 
`

export const NavItem = styled.div`
    color:#333;
    padding:0 15px;
    line-height: 56px;
    font-size:17px;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color: #ea6f5a;
    }
`

export const NavSreach = styled.input.attrs({
    placeholder:"搜尋"
})`
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    margin-top: 7px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    outline:none;
`

export const Addition = styled.div`
    position: absolute;
    right: 40PX;
    top: 0;
    height: 56px;
    display: flex;
`
export const Button = styled.div`
    width: 80px;
    height: 38px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    line-height: 38px;
    text-align: center;
    background-color: transparent;
    &.write{
        color:#fff;
        background-color: #ea6f5a;
    }
`



