import {View} from "react-native";
import React from "react";
import {Card} from "react-native-elements";
import {connect} from "react-redux";
import {ProductListItem} from "./ProductListItem";
import {DiscountListItem} from "./DiscountListItem";
import {FreeItemListItem} from "./FreeItemListItem";
import {AddMoreButton} from "./AddMoreButton";
import {CheckoutAlert} from "./CheckoutAlert";
import {CheckoutIcon} from "./CheckoutIcon";
import {PAGE_PRODUCT_PICKER} from "./StackNavigator";
import {addCheckoutAction} from "../actions/checkoutActions";
import {clearCartAction} from "../actions/cartActions";

export class Cart extends React.Component {

  static navigationOptions = ({navigation}) => {
    return ({
      title: 'Cart',
      headerRight: (<CheckoutIcon onPress={() => navigation.state.params.checkout()}/>),
    })
  };

  componentDidMount() {
    this.props.navigation.setParams({
      checkout: () => {
        CheckoutAlert(this.props.cart.totalPrice, () => {
          this.props.checkout(this.props.cart);
          this.props.navigation.goBack();

        })
      }
    });
  }

  render() {
    if (this.props.cart.productKeys.length === 0) {
      return (
        <AddMoreButton
          message="Add your first item"
          onPress={() => this.props.navigation.navigate(PAGE_PRODUCT_PICKER)}/>
      )
    }
    return (
      <View>
        <Card
          containerStyle={{paddingBottom: 0}}
          title={`TOTAL PRICE: $${this.props.cart.totalPrice}`}>
          {this.props.cart.products.map((product, index) => (
            <ProductListItem key={`product-${index}`} product={product}/>
          ))}
          {this.props.cart.discounts.map((discount, index) => (
            <DiscountListItem key={`discount-${index}`} discount={discount}/>
          ))}
          {this.props.cart.freeItems.map((freeItem, index) => (
            <FreeItemListItem key={`freeItem-${index}`} freeItem={freeItem}/>
          ))}
        </Card>
        <AddMoreButton
          message="Add more"
          onPress={() => this.props.navigation.navigate(PAGE_PRODUCT_PICKER)}/>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return ({
    currentCustomerKey: state.session.currentCustomer,
    cart: state.cart
  })
};

const mapDispatchToProps = dispatch => ({
  checkout: (cart) => {
    dispatch(addCheckoutAction(cart));
    dispatch(clearCartAction());
  }
});

export const CartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
