import React from 'react';
import './hover.css'
import {Flex,Button} from '@chakra-ui/react';
import {useState} from 'react';
import { FaRegHeart, FaSistrix} from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { BsBag } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom';

function Hover() {
const [show,setShow]=useState(false);
const navigate=useNavigate()
// window.addEventListener('scroll', showNav);
const showNav = () => {
    if (window.scrollY > 155) {
        setShow(true);
    }
    else {
        setShow(false);
    } 

}

  return (
   
    <div className='MainMenu'>
      {show && <div className='imag'style={{marginLeft:'50px'}}>
        <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182" alt=""  width='160px'/>
      </div>}
      <ul>
        <li>SHOP
          <div className='SubMenu_1'>
            <div class='submenu_2'>

              <ul style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-start',
                gap: '20px', height: '100%', width: '100%', marginTop: '0px'
              }}>

                <li onClick={()=>{
                navigate("/Products")
                }} >Skincare
                  <div className='submenu_3'>
                  <div>
                <h3>BY CATEGORY</h3>
                <p>Shop All</p>
                <p>Skincare</p>
                <p>Makeup</p>
                <p>Hair</p>
                <p>Bath & Body</p>
                <p>Fragrance</p>
                <p>Tools & Accessories</p>
                <p>Wellness</p>
                <p>Gifts</p>
                <p>Wedding Essentials</p>
              </div>
             < div>
             <h3>BY  BRAND</h3>
                <p>111Skin</p>
                <p>Augustinus Bader</p>
                <p>Balm Labs</p>
                <p>Dr Barbara Sturm</p>
                <p>EltaMD</p>
                <p>IS Clinical</p>
                <p>La Mer</p>
                <p>M-61</p>
                <p>Tata Harper</p>
                <p>ZitSticka</p>
              </div>
                    <div>
                      <li><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/ALO_081722_HO22_BeautyLifestyle_05_BALM_0082_2_303x303.png?v=1665503704" alt="" /></li>
                      <li><h4>The Female Founders Edit</h4></li>
                      <li><p>We're all about women helping women</p></li>
                    </div>
                     
                  </div>
                </li>
                <li>Makeup
                <div className='submenu_3'>
                  <div>
                <h3>BY CATEGORY</h3>
                <p>Shop All</p>
                <p>Skincare</p>
                <p>Makeup</p>
                <p>Hair</p>
                <p>Bath & Body</p>
                <p>Fragrance</p>
                <p>Tools & Accessories</p>
                <p>Wellness</p>
                <p>Gifts</p>
                <p>Wedding Essentials</p>
              </div>
             < div>
             <h3>BY  BRAND</h3>
                <p>111Skin</p>
                <p>Augustinus Bader</p>
                <p>Balm Labs</p>
                <p>Dr Barbara Sturm</p>
                <p>EltaMD</p>
                <p>IS Clinical</p>
                <p>La Mer</p>
                <p>M-61</p>
                <p>Tata Harper</p>
                <p>ZitSticka</p>
              </div>
                    <div>
                      <li><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/L_A_Foundation_Stick_Nav_Flyout_303x303.jpg?v=1664803456" alt="" /></li>
                      <li><h4>The Female Founders Edit</h4></li>
                      <li><p>We're all about women helping women</p></li>
                    </div>
                     
                  </div>
                </li>
                <li>Hair
                <div className='submenu_3'>
                  <div>
                <h3>BY CATEGORY</h3>
                <p>Shop All</p>
                <p>Skincare</p>
                <p>Makeup</p>
                <p>Hair</p>
                <p>Bath & Body</p>
                <p>Fragrance</p>
                <p>Tools & Accessories</p>
                <p>Wellness</p>
                <p>Gifts</p>
                <p>Wedding Essentials</p>
              </div>
             < div>
                <h3>BY  BRAND</h3>
                <p>111Skin</p>
                <p>Augustinus Bader</p>
                <p>Balm Labs</p>
                <p>Dr Barbara Sturm</p>
                <p>EltaMD</p>
                <p>IS Clinical</p>
                <p>La Mer</p>
                <p>M-61</p>
                <p>Tata Harper</p>
                <p>ZitSticka</p>
              </div>
                    <div>
                      <li><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Christine_Banz_-_2022-Q4-FlatLays-VeryPeri01_2000x2000_a8736441-0758-4058-ab65-428ade7dbe6f_303x303.jpg?v=1661783059" alt="" /></li>
                      <li><h4>The Female Founders Edit</h4></li>
                      <li><p>We're all about women helping women</p></li>
                    </div>
                     
                  </div>
                </li>
                <li>Bath & Body
                <div className='submenu_3'>
                  <div>
                <h3>BY CATEGORY</h3>
                <p>Shop All</p>
                <p>Skincare</p>
                <p>Makeup</p>
                <p>Hair</p>
                <p>Bath & Body</p>
                <p>Fragrance</p>
                <p>Tools & Accessories</p>
                <p>Wellness</p>
                <p>Gifts</p>
                <p>Wedding Essentials</p>
              </div>
             < div>
             <h3>BY  BRAND</h3>
                <p>111Skin</p>
                <p>Augustinus Bader</p>
                <p>Balm Labs</p>
                <p>Dr Barbara Sturm</p>
                <p>EltaMD</p>
                <p>IS Clinical</p>
                <p>La Mer</p>
                <p>M-61</p>
                <p>Tata Harper</p>
                <p>ZitSticka</p>
              </div>
                    <div>
                      <li><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/U_Beauty_Body_nav_Flyout_303x303.jpg?v=1664986518" alt="" /></li>
                      <li><h4>The Female Founders Edit</h4></li>
                      <li><p>We're all about women helping women</p></li>
                    </div>
                     
                  </div>
                </li>
                <li>Fragrance
                <div className='submenu_3'>
                  <div>
                <h3>BY CATEGORY</h3>
                <p>Shop All</p>
                <p>Skincare</p>
                <p>Makeup</p>
                <p>Hair</p>
                <p>Bath & Body</p>
                <p>Fragrance</p>
                <p>Tools & Accessories</p>
                <p>Wellness</p>
                <p>Gifts</p>
                <p>Wedding Essentials</p>
              </div>
             < div>
             <h3>BY  BRAND</h3>
                <p>111Skin</p>
                <p>Augustinus Bader</p>
                <p>Balm Labs</p>
                <p>Dr Barbara Sturm</p>
                <p>EltaMD</p>
                <p>IS Clinical</p>
                <p>La Mer</p>
                <p>M-61</p>
                <p>Tata Harper</p>
                <p>ZitSticka</p>
              </div>
                    <div>
                      <li><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Multi_Brand_Fragrance_Nav_Flyout_303x303.jpg?v=1664804407" alt="" /></li>
                      <li><h4>The Female Founders Edit</h4></li>
                      <li><p>We're all about women helping women</p></li>
                    </div>
                     
                  </div>
                </li>
                <li>Tools & Accessories
                <div className='submenu_3'>
                  <div>
                <h3>BY CATEGORY</h3>
                <p>Shop All</p>
                <p>Skincare</p>
                <p>Makeup</p>
                <p>Hair</p>
                <p>Bath & Body</p>
                <p>Fragrance</p>
                <p>Tools & Accessories</p>
                <p>Wellness</p>
                <p>Gifts</p>
                <p>Wedding Essentials</p>
              </div>
             < div>
             <h3>BY  BRAND</h3>
                <p>111Skin</p>
                <p>Augustinus Bader</p>
                <p>Balm Labs</p>
                <p>Dr Barbara Sturm</p>
                <p>EltaMD</p>
                <p>IS Clinical</p>
                <p>La Mer</p>
                <p>M-61</p>
                <p>Tata Harper</p>
                <p>ZitSticka</p>
              </div>
                    <div>
                      <li><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/ZIIP_Tools_Flyout_303x303.jpg?v=1664975001" alt="" /></li>
                      <li><h4>The Female Founders Edit</h4></li>
                      <li><p>We're all about women helping women</p></li>
                    </div>
                     
                  </div>
                </li>
                <li>Wellness
                <div className='submenu_3'>
                  <div>
                <h3>BY CATEGORY</h3>
                <p>Shop All</p>
                <p>Skincare</p>
                <p>Makeup</p>
                <p>Hair</p>
                <p>Bath & Body</p>
                <p>Fragrance</p>
                <p>Tools & Accessories</p>
                <p>Wellness</p>
                <p>Gifts</p>
                <p>Wedding Essentials</p>
              </div>
             < div>
             <h3>BY  BRAND</h3>
                <p>111Skin</p>
                <p>Augustinus Bader</p>
                <p>Balm Labs</p>
                <p>Dr Barbara Sturm</p>
                <p>EltaMD</p>
                <p>IS Clinical</p>
                <p>La Mer</p>
                <p>M-61</p>
                <p>Tata Harper</p>
                <p>ZitSticka</p>
              </div>
                    <div>
                      <li><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/wellness_navigation_303x303.jpg?v=1661983033" alt="" /></li>
                      <li><h4>The Female Founders Edit</h4></li>
                      <li><p>We're all about women helping women</p></li>
                    </div>
                     
                  </div>
                </li>
                <li>Gifts
                <div className='submenu_3'>
                  <div>
                <h3>BY CATEGORY</h3>
                <p>Shop All</p>
                <p>Skincare</p>
                <p>Makeup</p>
                <p>Hair</p>
                <p>Bath & Body</p>
                <p>Fragrance</p>
                <p>Tools & Accessories</p>
                <p>Wellness</p>
                <p>Gifts</p>
                <p>Wedding Essentials</p>
              </div>
             < div>
             <h3>BY  BRAND</h3>
                <p>111Skin</p>
                <p>Augustinus Bader</p>
                <p>Balm Labs</p>
                <p>Dr Barbara Sturm</p>
                <p>EltaMD</p>
                <p>IS Clinical</p>
                <p>La Mer</p>
                <p>M-61</p>
                <p>Tata Harper</p>
                <p>ZitSticka</p>
              </div>
                    <div>
                      <li><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/L_A_Foundation_Stick_Nav_Flyout_303x303.jpg?v=1664803456" alt="" /></li>
                      <li><h4>The Female Founders Edit</h4></li>
                      <li><p>We're all about women helping women</p></li>
                    </div>
                     
                  </div>
                </li>
                <li>Wedding Essentials
                <div className='submenu_3'>
                  <div>
                <h3>BY CATEGORY</h3>
                <p>Shop All</p>
                <p>Skincare</p>
                <p>Makeup</p>
                <p>Hair</p>
                <p>Bath & Body</p>
                <p>Fragrance</p>
                <p>Tools & Accessories</p>
                <p>Wellness</p>
                <p>Gifts</p>
                <p>Wedding Essentials</p>
              </div>
             < div>
             <h3>BY  BRAND</h3>
                <p>111Skin</p>
                <p>Augustinus Bader</p>
                <p>Balm Labs</p>
                <p>Dr Barbara Sturm</p>
                <p>EltaMD</p>
                <p>IS Clinical</p>
                <p>La Mer</p>
                <p>M-61</p>
                <p>Tata Harper</p>
                <p>ZitSticka</p>
              </div>
                    <div>
                      <li><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/L_A_Foundation_Stick_Nav_Flyout_303x303.jpg?v=1664803456" alt="" /></li>
                      <li><h4>The Female Founders Edit</h4></li>
                      <li><p>We're all about women helping women</p></li>
                    </div>
                     
                  </div>
                </li>
              </ul>
            </div>
            <div>

            </div>
            <div>

            </div>

          </div>
        </li>
        <li>NEW!
          <div className='SubMenu_1'>
            <div>
              <div>
                <h3>BY CATEGORY</h3>
                <p>Shop All</p>
                <p>Skincare</p>
                <p>Makeup</p>
                <p>Hair</p>
                <p>Bath & Body</p>
                <p>Fragrance</p>
                <p>Tools & Accessories</p>
                <p>Wellness</p>
                <p>Gifts</p>
                <p>Wedding Essentials</p>
              </div>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Female_Founders_Edit_Nav_Flyout_303x303.jpg?v=1664802686" alt="" />
              <h4>The Female Founders Edit</h4>
              <p>We're all about women helping women</p>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Lucky_No._7_Nav_Flyout_303x303.jpg?v=1664802927" alt="" />
              <h4>We're celebrating!</h4>
              <p>Ensure your lips and eyes pop,wherever  you go!</p>
            </div>

          </div>
        </li>
        <li>BRANDS
          <div className='SubMenu_1'>
            <div>
              <div>
                <h3>BY CATEGORY</h3>
                <p>Shop All</p>
                <p>Skincare</p>
                <p>Makeup</p>
                <p>Hair</p>
                <p>Bath & Body</p>
                <p>Fragrance</p>
                <p>Tools & Accessories</p>
                <p>Wellness</p>
                <p>Gifts</p>
                <p>Wedding Essentials</p>
              </div>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Weekend_Winddown_NAV_feature_303x303.jpg?v=1663797029" alt="" />
              <h4>THE FEMALE FOUNDERS EDIT</h4>
              <p>We're all about women helping women</p>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/The_Cache_FeaturedProduct1_303x303.jpg?v=1664567534" alt="" />
              <h4>We're celebrating!</h4>
              <p>Ensure your lips and eyes pop,wherever  you go!</p>
            </div>

          </div>
        </li>
        <li>EXPLORE
          <div className='SubMenu_1'>
            <div>
              <div>
                <h3>BY CATEGORY</h3>
                <p>Shop All</p>
                <p>Skincare</p>
                <p>Makeup</p>
                <p>Hair</p>
                <p>Bath & Body</p>
                <p>Fragrance</p>
                <p>Tools & Accessories</p>
                <p>Wellness</p>
                <p>Gifts</p>
                <p>Wedding Essentials</p>
              </div>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/store_events_navigation_303x303.jpg?v=1661983491" alt="" />
              <h4>THE FEMALE FOUNDERS EDIT</h4>
              <p>We're all about women helping women</p>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Irene_Forte_Nav_Flyout_303x303.jpg?v=1665508308" alt="" />
              <h4>We're celebrating!</h4>
              <p>Ensure your lips and eyes pop,wherever  you go!</p>
            </div>

          </div>
        </li>
        <li>EVENTS
          <div className='SubMenu_1'>
            <div>
              <div>
                <h3>BY CATEGORY</h3>
                <p>Shop All</p>
                <p>Skincare</p>
                <p>Makeup</p>
                <p>Hair</p>
                <p>Bath & Body</p>
                <p>Fragrance</p>
                <p>Tools & Accessories</p>
                <p>Wellness</p>
                <p>Gifts</p>
                <p>Wedding Essentials</p>
              </div>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Female_Founders_Edit_Nav_Flyout_303x303.jpg?v=1664802686" alt="" />
              <h4>THE FEMALE FOUNDERS EDIT</h4>
              <p>We're all about women helping women</p>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Lucky_No._7_Nav_Flyout_303x303.jpg?v=1664802927" alt="" />
              <h4>We're celebrating!</h4>
              <p>Ensure your lips and eyes pop,wherever  you go!</p>
            </div>

          </div>
        </li>
        <li>BLUEREWARDS
          <div className='SubMenu_1'>
            <div>
              <div>
                <h3>BY CATEGORY</h3>
                <p>Shop All</p>
                <p>Skincare</p>
                <p>Makeup</p>
                <p>Hair</p>
                <p>Bath & Body</p>
                <p>Fragrance</p>
                <p>Tools & Accessories</p>
                <p>Wellness</p>
                <p>Gifts</p>
                <p>Wedding Essentials</p>
              </div>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Weekend_Winddown_NAV_feature_303x303.jpg?v=1663797029" alt="" />
              <h4>THE FEMALE FOUNDERS EDIT</h4>
              <p>We're all about women helping women</p>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/The_Cache_FeaturedProduct1_303x303.jpg?v=1664567534" alt="" />
              <h4>We're celebrating!</h4>
              <p>Ensure your lips and eyes pop,wherever  you go!</p>
            </div>

          </div>
        </li>
        <li>THE CACHE
          <div className='SubMenu_1'>
            <div>
              <div>
                <h3>BY CATEGORY</h3>
                <p>Shop All</p>
                <p>Skincare</p>
                <p>Makeup</p>
                <p>Hair</p>
                <p>Bath & Body</p>
                <p>Fragrance</p>
                <p>Tools & Accessories</p>
                <p>Wellness</p>
                <p>Gifts</p>
                <p>Wedding Essentials</p>
              </div>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/store_events_navigation_303x303.jpg?v=1661983491" alt="" />
              <h4>THE FEMALE FOUNDERS EDIT</h4>
              <p>We're all about women helping women</p>
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Irene_Forte_Nav_Flyout_303x303.jpg?v=1665508308" alt="" />
              <h4>We're celebrating!</h4>
              <p>Ensure your lips and eyes pop,wherever  you go!</p>
            </div>

          </div>
        </li>
      </ul>
      {show && <Flex w="fitContent" ml='5px'>
                <Button leftIcon={<FiMapPin size='20px'/>} color="#54647e" colorScheme='white' variant='solid'  fontWeight="400"></Button>
                <Button leftIcon={<FaRegHeart size='20px'/>} color="#54647e" colorScheme='white' variant='solid'  fontWeight="400"></Button>
                <Button leftIcon={<FaSistrix size='20px'/>} color="#54647e" colorScheme='white' variant='solid'  fontWeight="400"></Button>
                <Button leftIcon={<VscAccount size='20px'/>} color="#54647e" colorScheme='white' variant='solid' f fontWeight="400"></Button>
                <Button leftIcon={<BsBag size='20px'/>} color="#54647e" colorScheme='white' variant='solid'  fontWeight="400"></Button>
            </Flex>}
    </div>
   
  )
}

export default Hover;