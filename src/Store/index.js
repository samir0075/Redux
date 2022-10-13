import { configureStore, createSlice } from "@reduxjs/toolkit";


//////   UI   //////////

const showModalWindow = { showModal: false }

const uiSlice = createSlice({
    name: "UI",
    initialState: showModalWindow,
    reducers: {
        onClick(state) {
            state.showModal = !state.showModal
        }
    }
})



///////   Value Handle ////////

const showValue = {items:[],totalQuantity:0}

const cartSlice = createSlice({
    name: "cart",
    initialState: showValue,
    reducers: {
      addItemToCart(state,action){
        const newItem = action.payload;
        const existingItem = state.items.find((item)=>item.id===newItem.id);
        state.totalQuantity++;
        if(!existingItem){
            state.items.push({
                id:newItem.id,
                price:newItem.price,
                quantity:1,
                name:newItem.title,
                totalPrice:newItem.price
            })
        }
        else {
            existingItem.quantity++;
            existingItem.totalPrice=existingItem.totalPrice+newItem.price;
        }
      }
    },
    removeItemFromCart(state,action){
        const id =action.payload;

        const existingItem=state.items.find(item=>item.id===id);
        state.totalQuantity--;
        if (existingItem.quantity===1){
         state.items=state.items.filter(item=>item.id!==id)
        }else{
            existingItem.quantity--;
            existingItem.totalPrice=existingItem.totalPrice-existingItem.price
        }
    }
})

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: cartSlice.reducer
    }
}
);




export const uiActions = uiSlice.actions;
export const cartActions = cartSlice.actions;

export default store;