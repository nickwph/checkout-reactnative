import {createStackNavigator} from "react-navigation";
import {ProductPickerContainer} from "./ProductPicker";
import {RecordPageContainer} from "./record/RecordPage";
import {CustomerPageContainer} from "./customer/CustomerPage";
import {CartPageContainer} from "./cart/CartPage";

export const PAGE_RECORD_PAGE = "PAGE_RECORD_PAGE";
export const PAGE_CUSTOMER_PICKER = "PAGE_CUSTOMER_PICKER";
export const PAGE_CART = "PAGE_CART";
export const PAGE_PRODUCT_PICKER = "PAGE_PRODUCT_PICKER";

const pages = {};
pages[PAGE_RECORD_PAGE]= {screen: RecordPageContainer};
pages[PAGE_CUSTOMER_PICKER]= {screen: CustomerPageContainer};
pages[PAGE_CART]= {screen: CartPageContainer};
pages[PAGE_PRODUCT_PICKER]= {screen: ProductPickerContainer};

export const StackNavigator = createStackNavigator(pages);