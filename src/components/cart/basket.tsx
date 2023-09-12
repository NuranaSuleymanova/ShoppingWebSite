import React, { useState } from 'react'
import { addToCart, getCartTotal, removeFromCart } from '../../redux/addToCardSlice';
import { useDispatch, useSelector } from 'react-redux';
import {FiArrowLeft} from 'react-icons/fi';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { RootState } from '../../redux/store';
interface BasketProps {
    item: any;
   
  };

  type ListItem = {
    id: number;
    name: string;
  };

const Basket = ({item}:BasketProps) => {
    
    const dispatch=useDispatch();
 
const [quantityCount,setQuantityCount]=useState(item.quantity);

// console.log("quantity",quantityCount)

const incrementQuantity=()=>
{
     dispatch(addToCart({id:item?.id, title:item?.title, image:item?.image,price:item?.price,quantity:1}));
     setQuantityCount(quantityCount+1);
     dispatch(getCartTotal());
}

const decrementQuantity=()=>
{
  dispatch(addToCart({id:item?.id, title:item?.title, image:item?.image,price:item?.price,quantity:-1}));
  if(quantityCount>1)
  {
    setQuantityCount(quantityCount-1);
  } 
  dispatch(getCartTotal());
}


// selected size/////


const initialItems: ListItem[] = [
  { id: 1, name: '6 (UK)' },
  { id: 2, name: '8 (UK)' },
  { id: 3, name: '10 (UK)' },
  { id: 4, name: '12 (UK)' },
  { id: 5, name: '14 (UK)' },
  { id: 6, name: '16 (UK)' },
  { id: 7, name: '18 (UK)' },
  // Add more items as needed
];

const [selectedItem, setSelectedItem] = useState<ListItem | null>(null);

const [showDropdown, setShowDropdown] = useState(true);

const handleItemClick = (list: ListItem) => {
 
  if (selectedItem?.id === list.id) {
    // Clicked on the same item again, hide the dropdown
    setSelectedItem(null);
    setShowDropdown(false);
  } else {
    setSelectedItem(list);
    setShowDropdown(true);
  }

};





  return (
    <div >
     
        <div className="basket-container">
          <div className="cart">
                <div className="cart-body-items-container">
                   <div className="cart-body-item">
                        <div className='cart-item-img-title'>
                           <img className='cart-item-img' src={item.image} alt="" />
                           <h3 className='cart-item-h3'>{item.title}</h3>
                        </div>

                        <div className="cart-item-size-quantity">
                          <div className="cart-item__size___e1epF">
                            <span className="cart-item__label___dgVIX" data-qa="cart-item-size-label">Size</span>
                            <div className="size-selector___ip4Ti" data-qa="cart-item-size-value">
                              <button onClick={ ()=>setShowDropdown(false)} type="button" className="size-selector__selected-size___ePoEX" data-qa="selected-size">{selectedItem?.name || '6 (UK)'}</button>
                                  <div  className={`dropdown ${showDropdown ? 'hidden' : 'visible'}`}>
                                     <ul className='dropdown-list-container'>
                                        { initialItems.map((item) => (
                                               <li
                                                      key={item.id}
                                                      onClick={() => handleItemClick(item)}
                                                      className={
                                                        selectedItem?.id === item.id ? 'selected-item' : 'unselected-item'
                                                      }
                                                        >
                                                        {item.name}
                                                           </li>
                                                        ))}

                                                  
                                     </ul>
                                    
                                  </div>
                                 </div>

                                 </div>
                                <div className="cart-item-quantity-container">
                                <span className="cart-item__label___dgVIX" data-qa="cart-item-quantity-label">Quantity</span>
                                   <div className="quantity-button-input"> 
                                   <button  onClick={decrementQuantity} className="quantity-selector__button____lmew"><AiOutlineMinus /></button>
                                  <input className='quantity-selector__input___guPkw' type="text" value={quantityCount}/>
                                  <button onClick={incrementQuantity} className='quantity-selector__button____lmew'><AiOutlinePlus /></button>
                                  </div>
                                </div>

                                <div className="cart-item__price___ANwmB" data-qa="cart-item-price-wrapper">
                                  <span className="cart-item__label___dgVIX" data-qa="cart-item-price-label">Price</span>
                                  <p className="price___mmHPL cart-item__total___CIKUs" data-qa="price">
                                    <span className="price__current-price price__current-price">£{item.price*quantityCount}</span></p>
                                    </div> 

                                    <button className='rmv-btn' onClick={()=>dispatch( removeFromCart(item.id))}>X</button>
                        </div>
                   </div>
                </div>
              
          </div>           
        </div>
       
    </div>
  )
}

export default Basket

function useEffect(arg0: () => void, arg1: import("redux").Dispatch<import("redux").AnyAction>[]) {
  throw new Error('Function not implemented.');
}
