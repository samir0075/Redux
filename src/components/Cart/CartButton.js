import classes from './CartButton.module.css';
import {useDispatch,useSelector} from  "react-redux";
import { uiActions } from '../../Store';

const CartButton = (props) => {
 
  const dispatch=useDispatch();
  const cartTotalQuantity= useSelector(state=>state.cart.totalQuantity)

  const handleClick=()=>{
    dispatch(
      uiActions.onClick()
    )
  }
  
  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalQuantity}</span>
    </button>
  );
};

export default CartButton;
