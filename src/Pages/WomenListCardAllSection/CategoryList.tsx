import React, { useEffect, useMemo, useState } from 'react'
import { ICategoryList } from '../../models/model'
import { filterLists } from '../../components/Data/imageData'
import {FaCheck} from 'react-icons/fa';


// interface propsCategory
// {
//     category:ICategoryList
// }
const CategoryList = () => {
 
  

const [category ,setCategory]=useState<ICategoryList[]>(filterLists)
const [selectedCategory, setSelectedCategory] = useState<string>('All');
const[toggle,setToggle]=useState(false);
const [isActive, setIsActive] = useState(false);

const handleCategoryFilter =(type:string)=>
{
    setSelectedCategory(type);
    setToggle(!toggle);
       setIsActive(false);
};

const filteredItems =selectedCategory==='All'? category:category.filter(item=>item.type===selectedCategory);


  return (
    <nav className='category-list-container'>
        <div className="category">
            <div className="category-list">
              <div className="wrapper-list"  >
                  <button className='btn-list  btn-list-type'style={{borderTop:isActive ? "1px solid #e1e1e1": 'none',borderLeft:isActive ? "1px solid #e1e1e1":'',borderRight:isActive ? "1px solid #e1e1e1":''}}  onClick={()=>handleCategoryFilter('category')}>
                    <h2>
                    <span className="text">Category</span>
                    </h2>
                    <svg className="separator___26fZp" width="10px" height="4px" viewBox="0 0 10 4"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                            <g transform="translate(-1311.000000, -309.000000)" stroke="#4D4D4D">
                            <polyline transform="translate(1316.000000, 311.000000) rotate(90.000000) translate(-1316.000000, -311.000000)" points="1314 307 1318 311 1314 315"></polyline>
                            </g>
                            </g></svg><meta itemProp="position" content="1" />
                  </button>
                
              </div>
              <div className="wrapper-list">
                  <button className='btn-list btn-list-type' style={{borderTop:isActive ? "1px solid #e1e1e1":'',borderLeft:isActive ? "1px solid #e1e1e1":'',borderRight:isActive ? "1px solid #e1e1e1":''}}  onClick={()=>handleCategoryFilter('occasion')}>
                    <h2>
                    <span className="text">Occasion</span>
                    </h2>
                    <svg className="separator___26fZp" width="10px" height="4px" viewBox="0 0 10 4"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                            <g transform="translate(-1311.000000, -309.000000)" stroke="#4D4D4D">
                            <polyline transform="translate(1316.000000, 311.000000) rotate(90.000000) translate(-1316.000000, -311.000000)" points="1314 307 1318 311 1314 315"></polyline>
                            </g>
                            </g></svg><meta itemProp="position" content="1" />
                          
                  </button>
                  
            
              </div>
              <div className="wrapper-list">
                  <button className='btn-list btn-list-type' style={{borderTop:isActive ? "1px solid #e1e1e1":'',borderLeft:isActive ? "1px solid #e1e1e1":'',borderRight:isActive ? "1px solid #e1e1e1":''}} onClick={()=>handleCategoryFilter('colour')}>
                    <h2>
                    <span className="text">Colour</span>
                    </h2>
                    <svg className="separator___26fZp" width="10px" height="4px" viewBox="0 0 10 4"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                            <g transform="translate(-1311.000000, -309.000000)" stroke="#4D4D4D">
                            <polyline transform="translate(1316.000000, 311.000000) rotate(90.000000) translate(-1316.000000, -311.000000)" points="1314 307 1318 311 1314 315"></polyline>
                            </g>
                            </g></svg><meta itemProp="position" content="1" />
                  </button>
                 
              </div>
              <div className="wrapper-list">
                  <button className='btn-list btn-list-type'style={{borderTop:isActive ? "1px solid #e1e1e1":'',borderLeft:isActive ? "1px solid #e1e1e1":'',borderRight:isActive ? "1px solid #e1e1e1":''}} onClick={()=>handleCategoryFilter('design')}>
                    <h2>
                    <span className="text">Design</span>
                    </h2>
                    <svg className="separator___26fZp" width="10px" height="4px" viewBox="0 0 10 4"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                            <g transform="translate(-1311.000000, -309.000000)" stroke="#4D4D4D">
                            <polyline transform="translate(1316.000000, 311.000000) rotate(90.000000) translate(-1316.000000, -311.000000)" points="1314 307 1318 311 1314 315"></polyline>
                            </g>
                            </g></svg><meta itemProp="position" content="1" />
                  </button>
              </div>
              <div className="wrapper-list">
                  <button className='btn-list btn-list-type' style={{borderTop:isActive ? "1px solid #e1e1e1":'',borderLeft:isActive ? "1px solid #e1e1e1":'',borderRight:isActive ? "1px solid #e1e1e1":''}}  onClick={()=>handleCategoryFilter('size')}>
                    <h2>
                    <span className="text">Size</span>
                    </h2>
                    <svg className="separator___26fZp" width="10px" height="4px" viewBox="0 0 10 4"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                            <g transform="translate(-1311.000000, -309.000000)" stroke="#4D4D4D">
                            <polyline transform="translate(1316.000000, 311.000000) rotate(90.000000) translate(-1316.000000, -311.000000)" points="1314 307 1318 311 1314 315"></polyline>
                            </g>
                            </g></svg><meta itemProp="position" content="1" />
                  </button>
              </div>
              <div className="wrapper-list">
                  <button className='btn-list btn-list-type' style={{borderTop:isActive ? "1px solid #e1e1e1":'',borderLeft:isActive ? "1px solid #e1e1e1":'',borderRight:isActive ? "1px solid #e1e1e1":''}}  onClick={()=>handleCategoryFilter('Fit')}>
                    <h2>
                    <span className="text">Fit</span>
                    </h2>
                    <svg className="separator___26fZp" width="10px" height="4px" viewBox="0 0 10 4"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                            <g transform="translate(-1311.000000, -309.000000)" stroke="#4D4D4D">
                            <polyline transform="translate(1316.000000, 311.000000) rotate(90.000000) translate(-1316.000000, -311.000000)" points="1314 307 1318 311 1314 315"></polyline>
                            </g>
                            </g></svg><meta itemProp="position" content="1" />
                  </button>
              </div>
              <div className="wrapper-list">
                  <button className='btn-list btn-list-type'  style={{borderTop:isActive ? "1px solid #e1e1e1":'',borderLeft:isActive ? "1px solid #e1e1e1":'',borderRight:isActive ? "1px solid #e1e1e1":''}}onClick={()=>handleCategoryFilter('brand')}>
                    <h2>
                    <span className="text">Brand</span>
                    </h2>
                    <svg className="separator___26fZp" width="10px" height="4px" viewBox="0 0 10 4"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                            <g transform="translate(-1311.000000, -309.000000)" stroke="#4D4D4D">
                            <polyline transform="translate(1316.000000, 311.000000) rotate(90.000000) translate(-1316.000000, -311.000000)" points="1314 307 1318 311 1314 315"></polyline>
                            </g>
                            </g></svg><meta itemProp="position" content="1" />
                  </button>
              </div>
              <div className="wrapper-list">
                  <button style={{borderTop:isActive ? "1px solid #e1e1e1":'',borderLeft:isActive ? "1px solid #e1e1e1":'',borderRight:isActive ? "1px solid #e1e1e1":''}} className='btn-list btn-list-type' data-type="collection" onClick={()=>handleCategoryFilter('collection')}>
                    <h2>
                    <span className="text">Collections</span>
                    </h2>
                    <svg className="separator___26fZp" width="10px" height="4px" viewBox="0 0 10 4"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                            <g transform="translate(-1311.000000, -309.000000)" stroke="#4D4D4D">
                            <polyline transform="translate(1316.000000, 311.000000) rotate(90.000000) translate(-1316.000000, -311.000000)" points="1314 307 1318 311 1314 315"></polyline>
                            </g>
                            </g></svg><meta itemProp="position" content="1" />
                  </button>
              </div>
              <div className="wrapper-list">
                  <button className='btn-list btn-list-type' data-type="price" >
                    <h2>
                    <span className="text">Price</span>
                    </h2>
                    <svg className="separator___26fZp" width="10px" height="4px" viewBox="0 0 10 4"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                            <g transform="translate(-1311.000000, -309.000000)" stroke="#4D4D4D">
                            <polyline transform="translate(1316.000000, 311.000000) rotate(90.000000) translate(-1316.000000, -311.000000)" points="1314 307 1318 311 1314 315"></polyline>
                            </g>
                            </g></svg><meta itemProp="position" content="1" />
                  </button>
              </div>
              {
                toggle &&  <div className='dropdowncategory'>
                    <ul>
                    {filteredItems.map(item => (
                     <li >
                         <FaCheck className='checkicon'/>
                        <input className='ui-checkbox' type="checkbox" />
                        <label className='ui-checkbox-label' htmlFor=""></label>
                      {item.text} 
                      </li>
                        ))}
                          </ul>
                        </div>
                      }
            </div>
            <div className="category-sort-options">
            <div className="wrapper___2YFZk">
                <button className="button___1cs1R toggle___2vxHX ClickOutsideDetector__Toggle toggle___1gOTc " data-qa="sort-facet-toggle" aria-label="sort-facet toggle" name="sort-facet toggle" type="button" value="">
                    <span className="child___2mBrM toggle-title___2D_gd" data-qa="sort-title" style={{fontSize:'12px'}}>Sort: </span>
                    <span className="child___2mBrM toggle-selected-name___35-bM" data-qa="sort-selected-name" style={{fontSize:'12px' ,fontWeight:'bold'}}>Featured</span>
                    <svg className="icon___qGwQD" width="10px" height="4px" viewBox="0 0 10 4"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><g transform="translate(-1311.000000, -309.000000)" stroke="#4D4D4D"><polyline transform="translate(1316.000000, 311.000000) rotate(90.000000) translate(-1316.000000, -311.000000)" points="1314 307 1318 311 1314 315"></polyline></g></g></svg></button><div className="body___2vj45 body___38FRb" data-qa="sort-accordion-body" style={{display:'none'}}><div className="sort-facet___3UPWy" data-qa="sort-options"><button className="button___1cs1R item___5A5Av selected___9Kk93" data-qa="sort-default-item" aria-label="sort" name="sort" type="button" value="">Featured</button><button className="button___1cs1R item___5A5Av" data-qa="sort-latest-item" aria-label="sort" name="sort" type="button" value="latest">Latest</button><button className="button___1cs1R item___5A5Av" data-qa="sort-price-lo-hi-item" aria-label="sort" name="sort" type="button" value="price-lo-hi">Price - low to high</button><button className="button___1cs1R item___5A5Av" data-qa="sort-price-hi-lo-item" aria-label="sort" name="sort" type="button" value="price-hi-lo">Price - high to low</button></div></div></div>
            </div>
        </div>
    </nav>
    
  )
}

export default CategoryList