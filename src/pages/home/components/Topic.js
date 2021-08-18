import React,{PureComponent} from "react";
import {TopicWrapper,TopicItem} from '../style'
import {connect} from 'react-redux';

class Topic extends PureComponent{
    render(){
        return (
            <TopicWrapper>
                
                {
                    this.props.topicList.map((item)=>{
                        return (
                            <TopicItem key={item.get('id')}>
                                <div className="pic"></div>
                                <div className="text">{item.get('title')}</div>
                            </TopicItem>
                        )
                    })
                }
                
            </TopicWrapper>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        topicList:state.get('home').get('topicList'),
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Topic);