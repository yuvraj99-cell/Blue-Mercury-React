import React from 'react';
import './infoCard.css';

const InfoCard = () => {
  return (
    <div className='div_1'>
      <div className='div_2'>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Fall_Maekup_Edit_Side_by_Side_640x.jpg?v=1664974256" alt="" />
          <div className='f_ALOO'>
        <h2>These sets are a steal!</h2>
        <p>Stock up on lipsticks, mascara and more (for less!) with these limited-edition sets </p>
        <button>SHOP MAKEUP SETS</button>
        </div>
        </div>

        <div>
          <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Noble_Panacea_Side_by_Side_640x.jpg?v=1664892184" alt="" />
          <div className='f_ALOO'>
        <h2>The Vitamin C Booster</h2>
        <p>4-week treatment program combines 20% pure L-Ascorbic Acid as well as 8 
            additional sources of Vitamin C with the highest concentrations found in 
            powerful natural extracts. </p>
        <button>SHOP NOBLE PANACEA</button>
        </div>
        </div>

      </div>
      <div className='div_3'>
      <div>
          <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/samples-content_block_705x705.jpg?v=1614296349" alt="" />
          <div className='f_ALOO'>
        <h2>FREE GIFTS </h2>
        <p>4-week treatment program combines 20% pure L-Ascorbic Acid as well as 8 
            additional sources of Vitamin C with the highest concentrations found in 
            powerful natural extracts. </p>
        <button>SHOP</button>
        </div>
        </div>

        <div>
          <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/store_events_navigation_705x705.jpg?v=1661983491" alt="" />
          <div className='f_ALOO'>
        <h2>EXCLUSIVE IN-STORE </h2>
        <p>4-week treatment program combines 20% pure L-Ascorbic Acid as well as 8 
            additional sources of Vitamin C with the highest concentrations found in 
            powerful natural extracts. </p>
        <button>LEARN MORE</button>
        </div>
        </div>

        <div>
          <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/spa_menu_photo_705x705.jpg?v=1628018315" alt="" />
          <div className='f_ALOO'>
        <h2>BLUEMERCURY SPA</h2>
        <p>4-week treatment program combines 20% pure L-Ascorbic Acid as well as 8 
            additional sources of Vitamin C with the highest concentrations found in 
            powerful natural extracts. </p>
        <button>SHOP</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
