import React, { useState } from 'react'
import Slider from "react-slick";
// import {useState} from "react";
import CustomModal from '../../Modal';
import {BsFillSuitHeartFill} from 'react-icons/bs'
import {BiPound} from 'react-icons/bi';

type TableRow = {
  id: number;
  name: string;
  image:string;
  price:number;
  description:string
};
const SliderComponent : React.FC= () => {

  const [tableData, setTableData] = useState<TableRow[]>([
    { id: 1, name: 'Item 1' ,image:'https://edge.curalate.com/v1/img/IXWy8oRYppCLeqJuI6boIflDbcX_yv6GAMFxIIXX9Po=/sc/600x600?spatialTags=0.520759:0.602939',price:33,description:'River Island Womens Pink Textured Swimsuit'},
    { id: 2, name: 'Item 2' , image:"https://edge.curalate.com/v1/img/xfc6HJqIi6Nqciib2OYB6X30XZa6czD-8TRB69dz2Yg=/sc/600x600?spatialTags=0.521537:0.525977",price:39,description:'WHITE BRODERIE CUT OUT BEACH MINI DRESS' },
    { id: 3, name: 'Item 3' ,image:"https://edge.curalate.com/v1/img/u884JTHfCEXHScNRUss3GPKTDF3Mx0cYt9qevMpjH9A=/sc/600x600?spatialTags=0.276816:0.569383" ,price:33,description:'River Island Womens Pink Textured Swimsuit'},
    { id: 4, name: 'Item 3' ,image:"https://edge.curalate.com/v1/img/_GBPmLLJC2VALN_UUsA04qOyM9ZoVOnuNW1wEEQO5IY=/sc/600x600?spatialTags=0.883436:0.565644,0.307332:0.555115",price:80,description:'River Island Womens Pink Textured Swimsuit'},
    { id: 5, name: 'Item 3' ,image:"https://edge.curalate.com/v1/img/-TV8owCg6uW1S6TZJCozG0ro1IQ1m61US4u_zDTuvRE=/sc/600x600?spatialTags=0.852761:0.489571,0.944533:0.339670,0.479878:0.540565",price:90,description:'River Island Womens Pink Textured Swimsuit'},
    { id: 6, name: 'Item 3' ,image:"https://edge.curalate.com/v1/img/lHFOfr7j1l31Tt07lmKxqVgSY0TTpJ5RTN9XdaYbVlA=/sc/600x600?spatialTags=0.552998:0.475626",price:50,description:'River Island Womens Pink Textured Swimsuit'},
    // Add more rows if needed
  ]);
 

  const [selectedRow, setSelectedRow] = useState<TableRow | null>(null);

  const openModal = (row: TableRow) => {
    setSelectedRow(row);
  };

  const closeModal = () => {
    setSelectedRow(null);
    document.body.classList.remove('modal-open');
  };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    }

 
  return (
    <div className='slider-container'>
         <div className="slider">
            <div className="flex-container">
                <header className='silder-header'>
                    <h2>WORN BY YOU</h2>
                    <a className='slide-title' href="#">#ImWearingRI gallery</a>
                </header>
                <div className="slick-slider">
                <Slider {...settings}>
                  {
                    tableData.map(item=>
                      (
                  <div  key={item.id} className='slide product' >
                     <h3>
                   <img className='image-slide ' src={item.image} alt="" onClick={() => openModal(item)}/>
                   <div className="slider-username">
                @alexincolour
             </div>
                   </h3>
          </div>
                      ))
                  }
          {selectedRow && (
        <CustomModal isOpen={true} onClose={closeModal}>
    
          <div style={{maxWidth:'552px',height:'100%',display:'flex'}}className="modal-image">
             <img style={{maxWidth:'100%',height:'100%',objectFit:'cover'}} src={selectedRow.image} alt="" />
            
          </div>
          <div style={{width:'309px',height:'552px'}} className="content">
          <div className="ugc-overlay-source">
            <img className="ugc-overlay-source__image" src={selectedRow.image} alt="alexincolour"/>
            <div className="ugc-overlay__meta">
              <span className="ugc-overlay-source__name">@alexincolour</span>
              <div className="ugc-overlay__meta-row">
                <span className="ugc-overlay__timestamp">9 DAYS AGO</span>
                </div>
                </div>
          </div>
          <div className="ugc-shop-the-look">
            <h2 className="ugc-shop-the-look__title">Shop the look</h2>
            <div className="look-product">
              <img className='look-product-image' src={selectedRow.image} alt="" />
               <button className='wish-list'><BsFillSuitHeartFill size={15}/></button>
            </div> 
               <div className="look-product-desc">
                <div className="look-product-price">
                    <span  className='price'>£</span>
                    <div className='price'>{selectedRow.price}</div>
                </div>
                 
                <span className='title'>{selectedRow.description}</span>
               </div>
           </div>

           </div>

           
        </CustomModal>
      )}
        </Slider> 
                </div>
            </div>
         </div>
    </div>
  )
}

export default SliderComponent