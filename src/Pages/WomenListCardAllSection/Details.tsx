import React, { useState } from 'react'
import { BsEye, BsFillSuitHeartFill, BsSuitHeart } from 'react-icons/bs'
import { CardList } from '../../redux/cardSlice'
import { useNavigate } from 'react-router-dom'
import DetailsProduct from './DetailsProduct'
import { openModal } from '../../redux/modalSlice'
import CustomModal from '../../Modal'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { relative } from 'path'


interface productProps
{
  items:CardList
}

const Details = ({items}:productProps) => {
  const [selectedRow, setSelectedRow] = useState<CardList | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % items.images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((currentSlide + items.images.length - 1) % items.images.length);
  };

  const openModal = (row: CardList) => {
    setSelectedRow(row);
  };

  const closeModal = () => {
    setSelectedRow(null);
    document.body.classList.remove('modal-open');
  };

    const navigate =useNavigate();
  return (
    <div>
          <div  className="image-div">
                <div className="image">
                <img  className="image-holder" src={items?.image } alt="" />
                <img  className="image-hover" src={items['image-hover']} alt="" onClick={()=>navigate(`/details/product/${items.id}`)} />
                </div>
                <button className="quick-view"  onClick={() => openModal(items)}  >
                      <BsEye className='view'/>
                  </button>

                  {selectedRow && (
                  <CustomModal isOpen={true} onClose={closeModal}>
    
            <div className="modal-image" style={{maxWidth:'552px',height:'100%',display:'flex' ,position:'relative'}}>
             <img  className='slide-image'  style={{maxWidth:'100%',height:'100%',objectFit:'cover'}}  src={items.images[currentSlide]} alt="" />
             <div className="prev-next-div" style={{display:'flex',justifyContent:'space-around'}}>
             <button onClick={goToPreviousSlide} className='previous-img' style={{position:'absolute',display:'flex',top:'50%',left:'0',border:'none',backgroundColor:'white'}}>
             <GrFormPrevious size={25} />
              </button>
                <button onClick={goToNextSlide} className='next-img'  style={{position:'absolute',display:'flex',top:'50%',right:'0',border:'none',backgroundColor:'white'}}>
              <GrFormNext size={25}/>  
             </button>
          </div>
          </div>
          
          <div className="card-popup-content">
              <div  style=
          {{
            width:'330px',
            height:'443px',
            boxSizing:'border-box',
            display:'flex',
            flexDirection:'row',
            textAlign:'left',
            flexWrap:'wrap',
            margin:'auto 27px',
            position:"relative",
            maxWidth:'330px',
            marginLeft:'100px'
            // alignItems:'center',
            // justifyContent:'center'
          
        }} >
              <div className="popup-content" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <h2
                 style={
                  {
                    fontSize:'18px',
                    fontWeight:'normal',
                    fontStyle:'normal',
                    textTransform:'uppercase',
                    position:'relative',
                    fontFamily:'Arial, Helvetica, sans-serif',
                    lineHeight:'1.4',
                    overflow:'hidden',
                    height:'calc(20px * 1.4 * 2)',
                    margin:'0 0 24px'
                  }
                 }>{items.title}</h2>
                <BsSuitHeart size={22} style={{position:'absolute' ,right:'0',top:'3%'}}/>
              </div>
              <span style={{width:'100%',height:'30px',marginLeft:'16px'}} >{items.price}</span>
              <ul style={{width:'100%',margin:'0px 0px 0px 24px'}} >
                <li style={{margin:'5px 5px'}}>{items.productdetails.d1}</li>
                <li style={{margin:'5px 5px'}}>{items.productdetails.d2}</li>
                <li style={{margin:'5px 5px'}}>{items.productdetails.d3}</li>
                <li style={{margin:'5px 5px'}}>{items.productdetails.d4}</li>
              </ul>
              <ul 
              style=
              {{width:'100%',
                display:'flex',
                alignItems:'center',
                justifyContent:'flex-start',
                padding:'0',
                margin:'0 0 8px',
                listStyle:'none'
              }}>
               <li style={{display:'flex',width:'12%',flex:'0 1 13.08%',margin:'0 1.3% 0 0',cursor:'pointer',boxSizing:'border-box',border:'1px solid #252525'}}>
                <button style={{
                  border:'none',
                  WebkitAppearance:'none',
                  background:'none',
                  outline:'none',
                  fontSize:'16px',
                  fontWeight:'700',
                  fontFamily:'Arial, Helvetica, sans-serif',
                  letterSpacing:'0.14px',
                  width:'100%',
                  margin:'0',
                  padding:'5px',
                  textAlign:'center',
                  color:'#000',
                  cursor:'pointer'
                }}
                >6</button></li> 
               <li style={{display:'flex',width:'12%',flex:'0 1 13.08%',margin:'0 1.3% 0 0',cursor:'pointer',boxSizing:'border-box',border:'1px solid #252525'}}>
                <button style={{
                  border:'none',
                  background:'none',
                  outline:'none',
                  fontSize:'16px',
                  fontWeight:'700',
                  fontFamily:'Arial, Helvetica, sans-serif',
                  letterSpacing:'0.14px',
                  width:'100%',
                  margin:'0',
                  padding:'5px',
                  textAlign:'center',
                  color:'#000',
                  cursor:'pointer'
                }}>
                  8</button></li> 
               <li style={{display:'flex',width:'12%',flex:'0 1 13.08%',margin:'0 1.3% 0 0',cursor:'pointer',boxSizing:'border-box',border:'1px solid #252525'}}>
                <button
                style={{
                  border:'none',
                  background:'none',
                  outline:'none',
                  fontSize:'16px',
                  fontWeight:'700',
                  fontFamily:'Arial, Helvetica, sans-serif',
                  letterSpacing:'0.14px',
                  width:'100%',
                  margin:'0',
                  padding:'5px',
                  textAlign:'center',
                  color:'#000',
                  cursor:'pointer'
                }}>10</button></li>
               <li style={{display:'flex',width:'12%',flex:'0 1 13.08%',margin:'0 1.3% 0 0',cursor:'pointer',boxSizing:'border-box',border:'1px solid #252525'}}>
                <button
                style={{
                  border:'none',
                  background:'none',
                  outline:'none',
                  fontSize:'16px',
                  fontWeight:'700',
                  fontFamily:'Arial, Helvetica, sans-serif',
                  letterSpacing:'0.14px',
                  width:'100%',
                  margin:'0',
                  padding:'5px',
                  textAlign:'center',
                  color:'#000',
                  cursor:'pointer'
                }}>12</button></li> 
               <li style={{display:'flex',width:'12%',flex:'0 1 13.08%',margin:'0 1.3% 0 0',cursor:'pointer',boxSizing:'border-box',border:'1px solid #252525'}}>
                <button 
                style={{
                  border:'none',
                  background:'none',
                  outline:'none',
                  fontSize:'16px',
                  fontWeight:'700',
                  fontFamily:'Arial, Helvetica, sans-serif',
                  letterSpacing:'0.14px',
                  width:'100%',
                  margin:'0',
                  padding:'5px',
                  textAlign:'center',
                  color:'#000',
                  cursor:'pointer'
                }}>14</button></li> 
               <li style={{display:'flex',width:'12%',flex:'0 1 13.08%',margin:'0 1.3% 0 0',cursor:'pointer',boxSizing:'border-box',border:'1px solid #252525'}}>
                <button 
                style={{
                  border:'none',
                  background:'none',
                  outline:'none',
                  fontSize:'16px',
                  fontWeight:'700',
                  fontFamily:'Arial, Helvetica, sans-serif',
                  letterSpacing:'0.14px',
                  width:'100%',
                  margin:'0',
                  padding:'5px',
                  textAlign:'center',
                  color:'#000',
                  cursor:'pointer'
                }}>16</button></li> 
               <li style={{display:'flex',width:'12%',flex:'0 1 13.08%',margin:'0 1.3% 0 0',cursor:'pointer',boxSizing:'border-box',border:'1px solid #252525'}}>
                <button 
                style={{
                  border:'none',
                  background:'none',
                  outline:'none',
                  fontSize:'16px',
                  fontWeight:'700',
                  fontFamily:'Arial, Helvetica, sans-serif',
                  letterSpacing:'0.14px',
                  width:'100%',
                  margin:'0',
                  padding:'5px',
                  textAlign:'center',
                  color:'#000',
                  cursor:'pointer'
                }}>18</button></li>
              </ul>
              <button 
              style={{
                width:'100%',
                backgroundColor:'#fbe356',
                cursor:'pointer',
                fontSize:'14px',
                fontWeight:'700',
                lineHeight:'16px',
                textTransform:'none',
                color:'inherit',
                position:'relative',
                borderRadius:'0',
                textAlign:'center',
                border:'none',
                outline:'none',
                transition:'background-color 0.5s ease',
                padding:'12px 16px',
                fontFamily:'Arial, Helvetica, sans-serif '}}>Add to bag</button>

                
               <div style={{
                width:'100%',
                display:'flex',
                justifyContent:'space-between'}}>
                <a 
                style={{
                  textDecoration:'none',
                  color:'#000',
                  padding: '16px 0 0',
                  fontSize:'14px',
                  fontFamily:'Arial, Helvetica, sans-serif',
                }} href="" onClick={()=>navigate(`/contact/product/${items.id}`)}>See Full Detail</a>
                <button onClick={()=>navigate(`/contact/product/${items.id}`)} style={{border:'none',background:'none'}}>
                           <GrFormNext  size={16}/>  
                        </button>
              </div>
          </div>
          </div>
         
        </CustomModal>
      )}

                 
                <div className="status">
                <img className='status-image' src={items?.status} alt="" />
                </div>
              
                <div className="content-heart">
                <h5 className='content'>{items?.title}</h5>
                 <span className='heart-icons'><BsSuitHeart/></span>
                </div>
                <div className="price-pound">
                    <span className='price'>{items?.price}</span>
                    </div>
                    
                </div>
    </div>
  )
}

export default Details



// onClick={()=>navigate(`/contact/product/${items.id}`)}