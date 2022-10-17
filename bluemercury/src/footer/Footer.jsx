import React from 'react';
import { Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box} from '@chakra-ui/react';
import './footer.css';
import {FaTwitter,FaPinterestP,FaFacebookF,FaInstagram,FaYoutube,FaLongArrowAltRight} from 'react-icons/fa'

const Footer = () => {
  return (
    <div style={{margin:'0px',padding:'0px'}}>
        <div className='f_div_1'>
            <div className='f_div_2'>
                <p>Get Expert Beauty Insight & Offers</p>
                <div style={{display:'flex'}}><input type="Email" placeholder='EMAIL ADDRESS' /><button><FaLongArrowAltRight/></button></div>
                <p>By continuing, you agree to Bluemercury's Privacy Practices</p>
                <div className='social_icons'>
                     <FaTwitter size='25px'/>
                     <FaPinterestP size='25px'/>
                     <FaFacebookF size='25px'/>
                     <FaInstagram size='25px'/>
                     <FaYoutube size='25px'/>
                </div>
                <p>Copyright 2022 Bluemercury. All Rights Reserved</p>
            </div>
            <div className='f_div_3'>
                <h3>BLUEMERCURY</h3>
                <p>Our Company</p>
                <p>Store Locator</p>
                <p>In-Store & Online Events</p>
                <p>Spa Menu</p>
                <p>Careers</p>
                <p>Vendor Submissions</p>
                <p>Diversity & Inclusion</p> 
            </div>

            <div className='f_div_4'>
            <h3>MY ACCOUNT</h3>
                <p>My Account</p>
                <p>Blue Rewards</p>
                <p>Gift Card Balance Checker</p> 
            </div>

            <div className='f_div_5'>
            <h3>CUSTOMER SERVICES</h3>
                <p>Contact Us</p>
                <p>Help & FAQ</p>
                <p>Shipping, Returns & Exchanges</p>
                <p>Gift Cards</p>
                <p>Offers & Promotions</p>
                <p>Klarna</p>
            </div>

            <div className='f_div_6'>
            <h3>RESOURCES</h3>
                <p>terms & Conditions</p>
                <p>Privacy Notice</p>
                <p>Do Not Sell My Personal Information</p>
                <p>CA Privacy Rights</p>
                <p>Accessibility</p>
                <p>Affiliate Program</p>
                <p>Cookie Preferences</p> 
            </div>
        </div>
    

      <div className='f_div_7'>
        <div className='f_div_8'>
        <p>Get Expert Beauty Insight & Offers</p>
                <div style={{display:'flex',width:'100%'}}><input type="Email" placeholder='EMAIL ADDRESS' /><button><FaLongArrowAltRight/></button></div>
                <div className='social_icons_2'>
                     <FaTwitter/>
                     <FaPinterestP/>
                     <FaFacebookF/>
                     <FaInstagram/>
                     <FaYoutube/>
                </div>
        </div>
        <div className='accortn'>
            <h2>BLUEMERCURY</h2>
        <Accordion allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontSize={12} color='#838c9a'>
        BLUEMERCURY
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
                <p>Our Company</p>
                <p>Store Locator</p>
                <p>In-Store & Online Events</p>
                <p>Spa Menu</p>
                <p>Careers</p>
                <p>Vendor Submissions</p>
                <p>Diversity & Inclusion</p> 
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'fontSize={12} color='#838c9a'>
        MY ACCOUNT
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
                <p>My Account</p>
                <p>Blue Rewards</p>
                <p>Gift Card Balance Checker</p>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontSize={12} color='#838c9a'>
        CUSTOMER SERVICES
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
                <p>Contact Us</p>
                <p>Help & FAQ</p>
                <p>Shipping, Returns & Exchanges</p>
                <p>Gift Cards</p>
                <p>Offers & Promotions</p>
                <p>Klarna</p>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left' fontSize={12} color='#838c9a'>
        RESOURCES
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
                <p>terms & Conditions</p>
                <p>Privacy Notice</p>
                <p>Do Not Sell My Personal Information</p>
                <p>CA Privacy Rights</p>
                <p>Accessibility</p>
                <p>Affiliate Program</p>
                <p>Cookie Preferences</p> 
    </AccordionPanel>
  </AccordionItem>
</Accordion>
<h3 style={{fontSize:'12px',color:'#838c9a',margin:'10px 17px'}}>TERMS OF SERVICE</h3>
<h3 style={{fontSize:'12px',color:'#838c9a',margin:'10px 17px'}}>REFUND POLICY</h3>
</div>
      </div>
    </div>
  )
}

export default Footer;