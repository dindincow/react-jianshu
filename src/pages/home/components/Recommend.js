import React,{PureComponent} from "react";
import {RecommendWrapper,RecommendItem} from '../style'
class Recommend extends PureComponent{
    render(){
        return (
            <RecommendWrapper>
                <RecommendItem imgUrl="https://images.pexels.com/photos/4386426/pexels-photo-4386426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></RecommendItem>
                <RecommendItem imgUrl="https://images.pexels.com/photos/3286817/pexels-photo-3286817.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></RecommendItem>
            </RecommendWrapper>
        )
    }
}

export default Recommend;