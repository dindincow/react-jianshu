
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
export const SearchWraper =  styled.div`
    float: left;
    position: relative;
    .iconfont.zoom{
        position: absolute;
        right: 10px;
        top: 12px;
        width: 30px;
        text-align: center;
        height: 30px;
        border-radius: 50%;
        line-height: 30px;
        &.focused{
            background: #9b9696;
            color: #fff;
        }
    }
`
export const NavSreach = styled.input.attrs({
    placeholder:"搜尋"
})`
    &.slide-enter {
        transition: all .2s ease-out;
    }

    &.slide-enter-active {
        width: 240px;
    }

    &.slide-exit {
        transition: all .2s ease-out;
    }

    &.slide-exit-active {
        width: 160px;
    }
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    margin-top: 7px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    outline:none;
    &.focused{
        width:240px; 
    }
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

export const SearchInfor = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding : 10px 20px;
    background-color: #fff;
    box-shadow: 0 0 8px rgb(0 0 0 / 20%);
`
export const SearchInforTitle = styled.div`
    margin-top:10px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`

export const SearchInforSwitch = styled.div`
   float:right;
   font-size:12px;
   cursor:pointer;
    .spin{
        display:block;
        float:left;
        font-size: 18px;
        vertical-align: bottom;
        margin-right: 3px;
        transition:all .2s ease-in;
        transform-origin:center center;
    }
`
export const SearchInforItem = styled.a`
    line-height:20px;
    padding:0 5px;
    font-size:12px;
    border:1px solid #ccc;
    border-radius:3px;
    display: block;
    float: left;
    margin: 0 10px 10px 0

`


