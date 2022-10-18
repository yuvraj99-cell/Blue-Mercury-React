import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {AiOutlineArrowLeft,AiOutlineArrowRight} from 'react-icons/ai'
import { Heading } from '@chakra-ui/react';

function SampleNextArrow(props) {
    const { className,style, onClick } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{...style,position:'absolute',zIndex:'100',top:'40%'}}
      ><AiOutlineArrowRight style={{color:'grey', fontSize:'20px'}}/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className,style, onClick } = props;
    return (
        <div
        className={className}
        onClick={onClick}
        style={{...style,position:'absolute',zIndex:'100',top:'40%'}}
      ><AiOutlineArrowLeft style={{color:'grey', fontSize:'20px'}}/>
      </div>
    );
  }


const TrendingCarosel = (props) => {
    const{data_1}=props;
    
      const settings = {
        dots: true,
        // infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        centerPadding: "0px",
      autoplaySpeed: 5000,
    
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
     
      };
  return (
    <div className='slider' style={{width:'30%', margin :'20px auto',position:'relative'}}>
    <Slider {...settings} >
    {
     data_1.map((item)=>{
        return(
        <div className='card' style={{boxShadow:'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
                                       display:'flex',
                                       flexDirection:'column',
                                       justifyContent:'center',
                                       alignItems:'center'}}>
        <div className='card-top'>
            <img src={item.image_url} alt={item.id} />
        </div>
        <div className='card-bottom'style={{textAlign:'center',lineHeight:'30px'}}>
            <p style={{color:'#54647e'}}><b>{item.p_name}</b></p>
            <p style={{color:'#54647e'}}>{item.type}</p>
            <p style={{color:'#54647e'}}>${item.price}</p>
        </div>
      </div>);
     })   
    }
    </Slider>
  
    
</div>
  )
}

export default TrendingCarosel;