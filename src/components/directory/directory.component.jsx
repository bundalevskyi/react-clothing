import { Link } from "react-router-dom";
import MainHeader from "../../routes/navigation/MainHeader.jsx/MainHeader.component";
import "./directory.styles.scss";
import { useState } from "react";
import Spinner from "../spinner/spinner.component";

const Directory = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className='container'>
      <MainHeader />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='parallax-wrapper'>
          <div className='main-banners'>
            <div className='banner'>
              <Link className='box-result' to={"shop/street"}>
                <div className='banner-sneakers exponea--banner'></div>
                <div className='banner-header-wrapper'>
                  <h2 className='banner-header'>Sneakers </h2>
                </div>
              </Link>
            </div>
            <div className='banner'>
              <Link className='box-result' to={"shop/street"}>
                <div className='banner-streetwear exponea--banner'></div>
                <div className='banner-header-wrapper'>
                  <h2 className='banner-header'>Streetwear </h2>
                </div>
              </Link>
            </div>
            <div className='banner'>
              <Link className='box-result' to={"shop/skateboard"}>
                <div className='banner-skateboard exponea--banner'></div>
                <div className='banner-header-wrapper'>
                  <h2 className='banner-header'>Skateboard </h2>
                </div>
              </Link>
            </div>
            <div className='banner'>
              <Link className='box-result' to={"shop/hiking"}>
                <div className='banner-snowboard exponea--banner'></div>
                <div className='banner-header-wrapper'>
                  <h2 className='banner-header'>Hiking</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Directory;
