import { AnyAction, configureStore } from '@reduxjs/toolkit';
import cardSlice from './cardSlice';
import modalReducer from './modalSlice';
import addToCardSlice from './addToCardSlice';
import WishList from './WishList';
// import detailsSlice from './detailsSlice';


export const store = configureStore({
  reducer: {
    categories:cardSlice,
    modal:modalReducer,
    cart:addToCardSlice,
    wishlist:WishList
  },
 
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


// function addToCartSlice(state: unknown, action: AnyAction): unknown {
//   throw new Error('Function not implemented.');
// }

