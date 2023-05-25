import { createSlice } from "@reduxjs/toolkit";

export const shoppingcartSlice = createSlice({
  name: "shoppingcart",
  // initialState,
  initialState: { cart: [], total: 0 },
  reducers: {
    addToCart(state, action) {
              for(let i=0 ; i<state.cart.length ; i++)
              {
                if(state.cart[i].id === action.payload.id){
                  state.cart[i].count += 1;
                  state.total += state.cart[i].price
                  return
                }
              }
              state.cart =  [...state.cart , action.payload]
              state.total += state.cart[state.cart.length-1].price
    },
    removeitem: (state,action) => {
            state.total -= (action.payload.price * action.payload.count);
            state.cart = state.cart.filter( (c) => c.id !== action.payload.id)
    },
    increment: (state,action)=> {
      const selected_id = state.cart.findIndex( (e) => e.id === action.payload.id );
      state.cart[selected_id].count += 1
      state.total += state.cart[selected_id].price;
    },
    decrement: (state , action) => {
      const selected_index = state.cart.findIndex( (e) => e.id === action.payload.id );
      state.cart[selected_index].count -= 1
      state.total -= state.cart[selected_index].price;
      if(state.cart[selected_index].count === 0) { 
         state.cart = state.cart.filter( (c) => c.id !== action.payload.id)
       }
    },
  },
});

export const { increment, decrement  , addToCart , removeitem } = shoppingcartSlice.actions;

export default shoppingcartSlice.reducer;