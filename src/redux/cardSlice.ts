import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface CardList
{
    
        "id":number,
        "title":string,
        "price":number,
        "category":string,
        "status":string,
        "images":[],
        "image-hover":string,
        "image":string,
        "productdetails":{ 
          "d1":string,
          "d2":string,
          "d3":string,
          "d4":string,
          "d5": string,
          "d6":string,
          "d7":string,
          "d8":string,
          "d9":string,
          "d10":string,
          "d11":string,
          "d12":string,
          "d13":string
        }
      
} 



export interface CategoryState {
    categories:CardList[],
    productDetails:CardList|null
  }

  const initialState:CategoryState={
    categories:[],
    productDetails: null
  }


  export const getCategories= createAsyncThunk('category',async()=>
  {
    const response=await fetch('http://localhost:3009/get-data/')
    const data=await response.json();
    return data.data;
  }
  )

  export const getProductDetails= createAsyncThunk('product',async(id:number)=>
  {
    const response=await fetch(`http://localhost:3009/get-data/${id}`)
    const data=await response.json();
    return data.data;
  }
 
  )



const categorySlice =createSlice({
   name:'categories',
   initialState,
   reducers:{},
   extraReducers: (builder)=>
   {
    builder
    .addCase(getCategories.fulfilled,(state,action)=>{
        state.categories=action.payload;
    })
    .addCase(getProductDetails.fulfilled,(state,action)=>
    {
        state.productDetails=action.payload
    })
   }     
    }
)

export default categorySlice.reducer