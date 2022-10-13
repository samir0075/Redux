import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from "react-redux";
import { useEffect } from 'react';



function App() {
  const uiValue = useSelector(state => state.ui.showModal)
  const cart = useSelector(state => state.cart);

  // useEffect(() => {

  //   const sendCartData = async () => {
  //     const response = await fetch('url', {
  //       method: "PUT",
  //       body: JSON.stringify(cart)
  //     })
     

  //   }

  // }, [])
  return (
    <Layout>
      {uiValue && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
