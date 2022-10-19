// import { Route, Routes } from "react-router-dom";
// import { Login } from "./Component/Login";
// import { Signup } from "./Component/Signup";
// import UserAccount from "./Component/UserAccount";
// import AccountOverview from "./Component/userAccountComponent/AccountOverview";
// import MyBluerewards from "./Component/userAccountComponent/MyBluerewards";
// import MyPurchases from "./Component/userAccountComponent/MyPurchases";
// import MyWishlist from "./Component/userAccountComponent/MyWishlist";
// import AccountDetails from "./Component/userAccountComponent/AccountDetails";
// import { ChakraProvider } from "@chakra-ui/react";
// import Products from "./Components/Product";
// import { Route, Routes } from "react-router-dom";
// import { SingleProducts } from "./Components/SingleProducts";



import Carosel from "../carousel/Carosel";
import Banner from "../banner_carousel/Banner_Carousel";
import BannerText from "../banner_carousel/BannerText";
import Hover from "../hover/Hover";
import { data_1 } from "../carousel/data";
import { data_2 } from "../carousel/dataScents";
import { data_3 } from "../carousel/dataBestSellers";
import { data_4 } from "../carousel/data_4";
import imge4 from "../images/image4.png";
import imge5 from "../images/image5.png";
import InfoCard from "../info_cards/InfoCard";

export const Home = () => {
  return (
    <>
      <Hover />
      <BannerText />
      <Banner />
      <Carosel data_1={data_1} Title={"NEW ARRIVALS"} />
      <div className="trending">
        <h2>TRENDING : BOLD EYES & JEWEL TONES</h2>
        <h6>
          Shop fall makeup favorites from Hourglass, Sisley-Paris and Lune+Aster
        </h6>
        <div className="trending_products">
          <img src={imge4} />
          {/* <Trending data_1={data_4} />   */}
        </div>
      </div>
      <Carosel data_1={data_2} Title={"SCENTS OF THE SEASON"} />
      <div className="ALO">
        <img src={imge5} />
        <div className="ALOO">
          <h3>ALO</h3>
          <h2>An allover skin saver</h2>
          <p>
            With a million ways to use it,our amla-infused Magic Multi-Balm is a
            liquid gold--an allover skin saver, overnight slugging hydrator,
            glass-skin highlighter, makeup-removing oil cleanser, and dry lip,
            elbow, cuticle and heel soothner.
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>
      <Carosel data_1={data_3} Title={"BEST SELLERS"} />
      <InfoCard />
    </>
  );
};
