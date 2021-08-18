import React,{PureComponent} from "react";
import {ListItem,ListInfor,LoadMore} from '../style';
import {connect} from "react-redux";
import {actionCreators} from "../store";
import {Link} from "react-router-dom"
class List extends PureComponent{
    render(){
        return (
            <div>  
            {
                this.props.articleList.map((item,index)=>{
                    return (
                        <Link key={index} to={`/detail/${item.get('id')}`}>
                            <ListItem>
                                <ListInfor>
                                    <h3>{item.get('title')}</h3>
                                    <p>{item.get('desc')}</p>
                                </ListInfor>
                                <img  className="itemImg" src={item.get('imgUrl')} alt=''/>
                            </ListItem>
                        </Link>
    
                    )
                })
            }
            <LoadMore onClick={this.props.getMoreList}>加載更多</LoadMore>
            </div>  
            
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        articleList:state.get('home').get('articleList'),
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        getMoreList(){
            dispatch(actionCreators.getMoreList())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(List);