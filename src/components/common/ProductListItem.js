import React from "react";
import {ListItem} from "react-native-elements";

export class ProductListItem extends React.Component {

  render() {
    return (
      <ListItem
        containerStyle={{borderBottomWidth: 0}}
        roundAvatar
        hideChevron={true}
        rightTitle={`$${this.props.product.price}`}
        title={this.props.product.name}
        avatar={this.props.product.image}
      />
    )
  }
}