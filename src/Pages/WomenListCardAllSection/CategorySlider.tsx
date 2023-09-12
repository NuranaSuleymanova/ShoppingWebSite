import React from 'react';
import { useState } from 'react';
import { BsArrowLeftCircle, BsArrowLeftSquare, BsArrowRightSquare, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { FaBeer } from 'react-icons/fa';
import Slider from 'react-slick';
type TableRow = {
    id: number;
    name: string;
    image:string;
    price:number;
    description:string
  };

const CategorySlider : React.FC= () => {
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
    
      function SampleNextArrow(props: any) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            onClick={onClick}
          ><BsArrowRightSquare style={{ ...style, color: "black", fontSize: "25px" ,position:'absolute',top:'1%',right:'30px'}}  /></div>
        );
      }
      
      function SamplePrevArrow(props: any) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            onClick={onClick}
          ><BsArrowLeftSquare style={{ ...style, color: "black", fontSize: "25px" ,position:'absolute',top:'1%',left:'5px',zIndex:'10'}}  /></div>
        );
      }


      const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }
  return (
    <div className='category-slider-container'>
        <div className="category-slider-content">
            <h4>CATEGORY</h4>
        </div> 
        <div className="catgory-slider">
        <Slider {...settings}>
          <div  className='slider' style={{outline:'none'}}>
            <img  className='slider-img' src="https://images.riverisland.com/is/image/RiverIsland/beige-cable-knit-wrap-jumper-midi-dress_752229_main?$ProductListingPortrait$" style={{width:'100px',height:'100px',objectFit:'contain'}}  />
            <h3 style={{fontSize:'12px',fontFamily:'Arial',fontWeight:'700',marginTop:'8px',marginLeft:'10px',lineHeight:'14px',textTransform:'uppercase'}}>Dresses</h3>
          </div>
          <div>
            <img  className='slider-img' src="https://images.riverisland.com/is/image/RiverIsland/beige-monogram-chain-shoulder-bag_753813_main?$ProductListingPortrait$" alt=""  style={{width:'100px',height:'100px',objectFit:'contain'}} />
            <h3 style={{fontSize:'12px',fontFamily:'Arial',fontWeight:'700',marginTop:'8px',marginLeft:'10px',lineHeight:'14px',textTransform:'uppercase'}}>Bags & Purses</h3>
          </div>
          <div>
            <img className='slider-img' src="https://images.riverisland.com/is/image/RiverIsland/stone-suede-fringe-detail-western-boots_753963_back?$ProductListingPortrait$" alt=""  style={{width:'100px',height:'100px',objectFit:'contain'}} />
            <h3 style={{fontSize:'12px',fontFamily:'Arial',fontWeight:'700',marginTop:'8px',marginLeft:'10px',lineHeight:'14px',textTransform:'uppercase'}}>Shoes & Boots</h3>
          </div>
          <div>
          <img className='slider-img' src="https://images.riverisland.com/is/image/RiverIsland/brown-faux-leather-straight-trousers_752503_rollover?$ProductListingPortrait$" alt=""  style={{width:'100px',height:'100px',objectFit:'contain'}} />
            <h3 style={{fontSize:'12px',fontFamily:'Arial',fontWeight:'700',marginTop:'8px',marginLeft:'10px',lineHeight:'14px',textTransform:'uppercase'}}>Trousers</h3>
          </div>
          <div>
          <img className='slider-img' src="https://images.riverisland.com/is/image/RiverIsland/cream-quilted-embroidered-floral-jacket_751786_main?$ProductListingPortrait$" alt=""  style={{width:'100px',height:'100px',objectFit:'contain'}} />
            <h3 style={{fontSize:'12px',fontFamily:'Arial',fontWeight:'700',marginTop:'8px',marginLeft:'10px',lineHeight:'14px',textTransform:'uppercase'}}>Coats & Jackets</h3>
          </div>
          <div>
          <img className='slider-img' src="https://images.riverisland.com/is/image/RiverIsland/blue-molly-mid-rise-super-skinny-fit-jeans_752546_rollover?$ProductListingPortrait$" alt=""  style={{width:'100px',height:'100px',objectFit:'contain'}} />
            <h3 style={{fontSize:'12px',fontFamily:'Arial',fontWeight:'700',marginTop:'8px',marginLeft:'10px',lineHeight:'14px',textTransform:'uppercase'}} >Jeans</h3>
          </div>
          <div>
          <img className='slider-img' src="https://images.riverisland.com/is/image/RiverIsland/beige-knitted-cardigan_753618_main?$ProductListingPortrait$" alt=""  style={{width:'100px',height:'100px',objectFit:'contain'}} />
            <h3 style={{fontSize:'12px',fontFamily:'Arial',fontWeight:'700',marginTop:'8px',marginLeft:'10px',lineHeight:'14px',textTransform:'uppercase'}} >Jumpers & Cardigans</h3>
          </div>
          <div>
          <img className='slider-img' src="https://images.riverisland.com/is/image/RiverIsland/brown-maxi-bias-skirt-with-linen_752553_rollover?$ProductListingPortrait$" alt=""  style={{width:'100px',height:'100px',objectFit:'contain'}} />
            <h3 style={{fontSize:'12px',fontFamily:'Arial',fontWeight:'700',marginTop:'8px',marginLeft:'10px',lineHeight:'14px',textTransform:'uppercase'}}>Skirts</h3>
          </div>
          <div>
          <img className='slider-img' src="https://images.riverisland.com/is/image/RiverIsland/brown-scuba-wide-leg-jumpsuit_751277_rollover?$ProductListingPortrait$" alt=""  style={{width:'100px',height:'100px',objectFit:'contain'}} />
            <h3 style={{fontSize:'12px',fontFamily:'Arial',fontWeight:'700',marginTop:'8px',marginLeft:'10px',lineHeight:'14px',textTransform:'uppercase'}}>Playsuits & Jumpsuits</h3>
          </div>
          <div>
          <img className='slider-img' src="https://images.riverisland.com/is/image/RiverIsland/gold-gauze-oversized-shirt_753723_main?$ProductListingPortrait$" alt=""  style={{width:'100px',height:'100px',objectFit:'contain'}} />
            <h3 style={{fontSize:'12px',fontFamily:'Arial',fontWeight:'700',marginTop:'8px',marginLeft:'10px',lineHeight:'14px',textTransform:'uppercase'}}>Shorts</h3>
          </div>
          <div>
          <img className='slider-img' src="https://images.riverisland.com/is/image/RiverIsland/beige-button-detail-shorts-with-linen_754887_main?$ProductListingPortrait$" alt=""  style={{width:'100px',height:'100px',objectFit:'contain'}} />
            <h3 style={{fontSize:'12px',fontFamily:'Arial',fontWeight:'700',marginTop:'8px',marginLeft:'10px',lineHeight:'14px',textTransform:'uppercase'}}>Tops</h3>
          </div>
        </Slider>
        </div>
    </div>
  )
}

export default CategorySlider