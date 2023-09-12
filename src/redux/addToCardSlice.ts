
import { createSlice } from "@reduxjs/toolkit";
import { json } from "stream/consumers";



const fetchFromLocalStorage =()=>{
   let cart=localStorage.getItem(String('cart'));
   if(cart)
   {
    return JSON.parse(cart)
   }else
   {
    return [];
   }
}

const fetchFromLocalStorageForList =()=>{
    let list=localStorage.getItem(String('list'));
    if(list)
    {
     return JSON.parse(list)
    }else
    {
     return [];
    }
 }
 

const storeInLocalStorage=(data:any)=>
{
          localStorage.setItem('cart',JSON.stringify(data))
        
}

const storeInLocalStorageList=(dataList:any)=>
{
    
          localStorage.setItem('list',JSON.stringify(dataList))
}

interface CartItemQTY 
{
    id:string,
    quantity:number,
    price:number
}


interface addToCartState{
    carts:any,
    itemCount:number,
    totalAmount:number,
    items:any[],

}

const initialState:addToCartState={
    carts:fetchFromLocalStorage(),
    itemCount:0,
    totalAmount:0,
    items: fetchFromLocalStorageForList(),
}


const addToCardSlice =createSlice({
    name:'cart',
    initialState,
    reducers:{

        addtoWishlist:(state,action) =>{
         
           const isItemList=state.items.find((list: { id: number; }) => list.id=== action.payload.id)
            if(isItemList)
            {
                const tempList=state.items.map((list:{id:number,quantity:number})=>
                {

                    console.log(list)
                    if(list.id===action.payload.id)
                    {
                        let listQty=list.quantity +action.payload.quantity;
                        return {
                            ...list,quantity: listQty
                        }
                    }
                    else 
                    {
                        return list
                    }
                })
                state.items=tempList;
                storeInLocalStorageList(state.items)
            }
            else 
          {
            state.items.push(action.payload);
            storeInLocalStorageList(state.items)
          }
        },
        // removeFromWishlist :(state,action)=>
        // {
        //     state.items=state.items.filter((item)=>item!==action.payload);

        // },


        addToCart:(state,action)=>
        {
          const isItemCart=state.carts.find((item: { id: any; }) => item.id=== action.payload.id)
        
          if(isItemCart)
          {
            const tempCart=state.carts.map((item: { id: number; price: number; quantity:number}) =>
                {
                    if(item.id===action.payload.id)
                    {
                        let tempQty=item.quantity +action.payload.quantity;
                        let tempTotalPrice=tempQty+item.price
                        return {
                            ...item,   quantity:tempQty , totalPrice:tempTotalPrice
                        }
                    }else 
                    {
                        return item
                    }
                }) 
                state.carts=tempCart;
                storeInLocalStorage(state.carts)
          }else 
          {
            state.carts.push(action.payload);
            storeInLocalStorage(state.carts)
          }
        },
        removeFromCart:(state,action) =>
        {
            const tempCart=state.carts.filter((item: { id: number; })=> item.id !==action.payload);
            state.carts=tempCart;
            storeInLocalStorage(state.carts)
        },
        clearCart:(state) =>
        {
           
            state.carts=[];
            storeInLocalStorage(state.carts)
        },
        getCartTotal :(state)=>
        {
            state.totalAmount=state.carts.reduce((cartTotal: number,cartItem:{price: number,quantity:number})=>
            {     
                
                return cartTotal += cartItem.price*cartItem.quantity
              
            },0)
           
            // state.itemCount=state.carts.length
        },
        getListTotal :(state)=>
        {
           
            state.itemCount=state.items.length
        },
       
       
       
    }
})


export const{addToCart,removeFromCart,clearCart,getCartTotal,addtoWishlist,getListTotal}=addToCardSlice.actions;
export default addToCardSlice.reducer
