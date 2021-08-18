import styled from 'styled-components';


export const HomeWrapper = styled.div`
    width:960px;
    margin: 0 auto;
    overflow:hidden;

`
export const HomeLeft = styled.div`
    float:left;
    width:625px;
    padding-top:30px;
    margin-right:15px
    img{
        width:100%;
    }
 
`
export const HomeRight = styled.div`
    width:280px;
    float:right;
`

export const TopicWrapper = styled.div`

    overflow:hidden;
    margin-top:25px;
`
export const TopicItem = styled.div`
    height: 32px;
    margin-right: 15PX;
    margin-bottom: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #282828;
    border: 1px solid #ccc;
    display: inline-flex;
    align-items: center;
    .pic{
        width:32px;
        height:32px;
        background:#ccc;
        display: inline-block;
    }
    .text{
        padding: 0 5px;
    }
`

export const ListItem = styled.div`
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid #ccc;
    .itemImg{
        width:150px;
        height:100px
    }
`


export const ListInfor = styled.div`
margin-right: 15px;
    h3{
        font-size:20px;
        margin-bottom: 15px;
        font-weight: 800;
    }
    p{
        font-size:14px;
        line-height:18px;
    }
`
export const RecommendWrapper = styled.div`
    margin:30px 0;
    width:280px;
`

export const RecommendItem = styled.div`
    width:280px;
    margin-bottom: 20px;
    height:50px;
    background:url(${props=>props.imgUrl});
    background-size:contain;
`

export const LoadMore = styled.div`
    width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    height: 45px;
    margin: 30px auto 60px;
    padding: 0px 15px;
    text-align: center;
    font-size: 18px;
    color: #fff;
    box-sizing: border-box;
    line-height: 45px;
    cursor: pointer;
`
export const BackTop = styled.div`
    border: 1px solid #dcdcdc;
    cursor: pointer;
    width: 50px;
    height: 50px;
    text-align: center;
    display: block;
    color: #000;
    position: fixed;
    right: 100px;
    bottom: 50px;
`


