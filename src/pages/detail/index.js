import React,{Component} from "react";
import {DetailWrapper,Header,Content} from "./style";
import {connect} from 'react-redux';
import {actionCreators} from './store'
import {withRouter} from "react-router-dom"

class Detail extends Component{
    render(){
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}}>    
                </Content>
            </DetailWrapper>
        ) 
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}
const mapStateToProps = (state)=>({
    title:state.get('detail').get('title'),
    content:state.get('detail').get('content'),
})

const mapDispatchToProps = (dispatch)=>({
    getDetail(id){
        dispatch(actionCreators.getDetail(id))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));