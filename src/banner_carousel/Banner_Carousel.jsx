import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import imge1 from '../images/image1.png';
import imge2 from '../images/image2.png';
import imge3 from '../images/image3.png';
import imge11 from '../images/image11.png';
import imge21 from '../images/image21.png';
import imge31 from '../images/image31.png';
import { Show,Image } from '@chakra-ui/react';


const Banner_Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 5000,
  centerMode: true,
  centerPadding: "0px",
  };
return (
<div className='slider' style={{width:'100%', margin :'0px auto'}}>
    <Slider {...settings}>
    
      <div className='card'>
        <Show  breakpoint='(min-width: 700px)'><img src={imge1} alt="" /></Show>
        <Show breakpoint='(max-width: 700px)'><Image src={imge11} alt="" w="60%"  m="10px auto"/></Show>
        
       </div>
      <div className='card'>
      <Show  breakpoint='(min-width: 700px)'><img src={imge2} alt="" /></Show>
        <Show breakpoint='(max-width: 700px)'><Image src={imge21} alt="" w="60%"  m="10px auto"/></Show>
      </div>
      <div className='card'>
      <Show  breakpoint='(min-width: 700px)'><img src={imge3} alt="" /></Show>
        <Show breakpoint='(max-width: 700px)'><Image src={imge31} alt="" w="60%" m="10px auto"/></Show>
      </div>
     
    </Slider>
  
    
</div>
);
}

export default Banner_Carousel