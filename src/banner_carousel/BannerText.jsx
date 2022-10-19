import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {MdOutlineDoubleArrow} from 'react-icons/md'
import { Flex, Heading } from '@chakra-ui/react';

const BannerText = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  autoplaySpeed: 3000,
  cssEase:"linear"
  };
return (
<div className='slider' style={{width:'100%', margin :'0px auto'}}>
    <Slider {...settings}>
    <Heading fontSize="11px" bgColor="#D7EBF2" h='40px' fontWeight="500" color="#12284C" textAlign="center" p="10px">Free Samples With All Orders</Heading>
    <Heading fontSize="11px" bgColor="#D7EBF2" h='40px' fontWeight="500" color="#12284C" textAlign="center" p="10px"><Flex justify="center" align="center">Free Gifts With Purchase. Browse Now <MdOutlineDoubleArrow/></Flex></Heading>
    <Heading fontSize="11px" bgColor="#D7EBF2" h='40px' fontWeight="500" color="#12284C" textAlign="center" p="10px">Due To High Volumes, Shipping Times May Be Delayed.</Heading>
    <Heading fontSize="11px" bgColor="#D7EBF2" h='40px' fontWeight="500" color="#12284C" textAlign="center" p="10px">Free Shipping For BlueRewards Members.</Heading>
    </Slider>
  
    
</div>
);
}

export default BannerText;