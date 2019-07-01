import React, { Component } from "react";
import Wrapper from "../../hoc/wrapperComponent";
import Burger from "../../components/burger/burger";
import BuildControls from "../../components/burger/buildControls/buildControls";
import OrderSummary from "../../components/burger/orderSummary/orderSummary";
import Modal from "../../components/ui/modal/modal";

const INGREDIENT_PRICES = {
  meat: 0.5,
  salad: 0.4,
  cheese: 1.3,
  bacon: 0.7
};

export class BurgerBuilder extends Component {
  state = {
    ingredients: {
      meat: 0,
      salad: 0,
      cheese: 0,
      bacon: 0
    },
    totalPrice: 4,
    purchasable: false,
    order: false
  };

  updatePurchasable() {
    let ingredients = { ...this.state.ingredients };
    let sum = 0;
    for (let key in ingredients) {
      sum += ingredients[key];
      console.log(ingredients[key]);
    }
    console.log("sum =" + sum);

    this.setState({ purchasable: sum > 0 });
  }

  _clickLessHandler = type => {
    let cloneIngredients = { ...this.state.ingredients };
    if (cloneIngredients[type]) {
      cloneIngredients[type] = cloneIngredients[type] - 1;
      this.setState({ ingredients: cloneIngredients });
    }
    let oldPrice = this.state.totalPrice;
    let deductionPrice = INGREDIENT_PRICES[type];
    let newPrice = oldPrice - deductionPrice;
    this.setState({ totalPrice: newPrice }, () => this.updatePurchasable());
  };

  _clickMoreHandler = type => {
    let cloneIngredients = { ...this.state.ingredients };
    cloneIngredients[type] = cloneIngredients[type] + 1;

    let oldPrice = this.state.totalPrice;
    let additionPrice = INGREDIENT_PRICES[type];
    let newPrice = oldPrice + additionPrice;
    this.setState({ ingredients: cloneIngredients, totalPrice: newPrice }, () =>
      this.updatePurchasable()
    );
  };

  _orderHandler = () => {
    this.setState({ order: true });
  };

  _closeModalHandler=()=>{
    this.setState({ order: false });
  };

  _continuePurchaseHandler=()=>{
    alert('continue')
  };

  render() {
    let disabledInfo = { ...this.state.ingredients };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Wrapper>
         <Modal 
         show={this.state.order}   
         closeModal={this._closeModalHandler}>
        <OrderSummary 
        ingredients={this.state.ingredients} 
        cancelPurchase={this._closeModalHandler}
        continuePurchase={this._continuePurchaseHandler}
        totalPrice={this.state.totalPrice}
        />
      </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredients={this.state.ingredients}
          clickLess={this._clickLessHandler}
          clickMore={this._clickMoreHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          order={this._orderHandler}
        />
      </Wrapper>
    );
  }
}

export default BurgerBuilder;
