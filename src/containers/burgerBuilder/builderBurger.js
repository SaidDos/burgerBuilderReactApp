import React ,{Component} from 'react';
import Wrapper from '../../hoc/wrapperComponent';
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/buildControls/buildControls';

export class BurgerBuilder extends Component{
    state={
        ingredients:{
            meat:2,
            salad:1,
            cheese:2,
            bacon:2
        }
    };

    _clickLessHandler=(type)=>{
        let cloneIngredients=this.state.ingredients;
        if(cloneIngredients[type]){
            cloneIngredients[type]=cloneIngredients[type]-1;
            this.setState({ingredients:cloneIngredients});
        }
    };

    _clickMoreHandler=(type)=>{
        let cloneIngredients=this.state.ingredients;
        cloneIngredients[type]=cloneIngredients[type]+1;
        this.setState({ingredients:cloneIngredients});
    };

    render(){
        return(
            <Wrapper>
                <Burger ingredients={this.state.ingredients}/>
                 <BuildControls 
                 ingredients={this.state.ingredients} 
                 clickLess={(type)=>this._clickLessHandler(type)} 
                 clickMore={(type)=>this._clickMoreHandler(type)}
                 />
            </Wrapper>
        );
    }
};

export default BurgerBuilder;