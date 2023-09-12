import { PayloadAction, createSlice ,} from "@reduxjs/toolkit";



interface WishlistState {
    items:number[];
}


const initialState:WishlistState={
    items:[],
};

// reducers: {
//     // Items can be only added once to the cart
//     addToCart: (state, action: PayloadAction<VideoGame>) => {
//       const item = state.cart.find((item) => item.id === action.payload.id);
//       if (!item) {
//         state.cart.push(action.payload);
//       }
//     },
//     removeFromCart: (state, action: PayloadAction<VideoGame>) => {
//       state.cart = state.cart.filter((game) => game.id !== action.payload.id);
//     },
//   },

const wishlistSlice =createSlice ({
    name:"wishlist",
    initialState,
    reducers:{
        addtoWishlist:(state,action: PayloadAction<number>) =>{
            if (!state.items.includes(action.payload)){
                state.items.push(action.payload)
            }
        },
        removeFromWishlist :(state,action:PayloadAction<number>)=>
        {
            state.items=state.items.filter((item)=>item!==action.payload);
        }
    }
})


export const {addtoWishlist ,removeFromWishlist} =wishlistSlice.actions;
export default wishlistSlice.reducer;