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
      ><AiOutlineArrowRight style={{color:'grey', fontSize:'40px'}}/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className,style, onClick } = props;
    return (
        <div
        className={className}
        onClick={onClick}
        style={{...style,position:'absolute',zIndex:'100',top:'40%',left:'-4%'}}
      ><AiOutlineArrowLeft style={{color:'grey', fontSize:'40px'}}/>
      </div>
    );
  }

const Carosel = (props) => {
    const {data_1,Title}=props;
    
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        centerMode: true,
        centerPadding: "0px",
      autoplaySpeed: 3000,
    
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
            centerMode: true,
        centerPadding: "0px",
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            infinite: true,
            dots: true,
            centerMode: true,
        centerPadding: "0px",
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            centerMode: true,
        centerPadding: "0px",
          }
        }
      ]
      };
  return (
    <div className='slider' style={{width:'75%',margin :'20px auto',position:'relative'}}>
        <Heading fontSize="27px" fontWeight="350" color="#54647e" textAlign="center" p="10px">{Title}</Heading>
        <Slider {...settings} >
        {
         data_1.map((item)=>{
            return(
            <div className='card' style={{boxShadow:'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
                                           display:'flex',
                                           flexDirection:'column',
                                           justifyContent:'center',
                                           alignItems:'center'}}>
            <div className='card-top'style={{display:'flex',
                                           flexDirection:'column',
                                           justifyContent:'center',
                                           alignItems:'center'}}>
                <img src={item.image_url} alt={item.id} />
            </div>
            <div className='card-bottom'style={{textAlign:'center',lineHeight:'30px'}}>
                <p style={{color:'##12284C',fontSize:'12px',fontWeight:'600'}}>{item.p_name}</p>
                <p style={{color:'##12284C',fontSize:'14px',fontWeight:'100'}}>{item.type}</p>
                <p style={{color:'##12284C',fontSize:'14px',fontWeight:'100'}}>${item.price}</p>
            </div>
          </div>);
         })   
        }
        </Slider>
      
        
    </div>
  );
}

export default Carosel;