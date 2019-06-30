import React ,{Component} from 'react';
import Wrapper from '../../hoc/wrapperComponent';
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/buildControls/buildControls';

export class BurgerBuilder extends Component{
    state={
        ingredients:{
            meat:0,
            salad:0,
            cheese:5,
            bacon:1
        }
    }
    render(){
        return(
            <Wrapper>
                <Burger ingredients={this.state.ingredients}/>
                 <BuildControls ingredients={this.state.ingredients}/>
            </Wrapper>
        );
    }
};

export default BurgerBuilder;