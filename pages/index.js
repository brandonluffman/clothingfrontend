import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import VideoBackground from '../components/VideoBackground';
// import ReactTilt from 'react-universal-tilt';


// function myFunc(el) {
//   el.style.backgroundColor = '#f00';
// }
function Home() {
  const [loading, setLoading] = useState(true);
  // const handleTiltChange = (e) => {
  //   console.log(e.tiltX, e.tiltY, e.angle);
  // };

  // const style = {
  //   border: '1px solid #333',
  // };


  // useEffect(() => {
  //   // Simulate some async work here (e.g., fetching data)
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // 2 seconds, replace with your actual loading logic
  // }, []);

  return (
    <div>
      {/* {loading ? (
        <div className="splash-screen">
          <h1>Loading...</h1>
        </div>
      ) : ( */}
        <div>
          <Navbar />
          <div className='index-spotlight'>
          <VideoBackground />
          {/* <h1>Welcome to the Index Page</h1> */}
          </div>
          <div className='index-shopping-container'>
            <div className='index-shopping'>
              <div className='index-shop-item'>
                <div className='index-glass'>
                  <img src='/shirt.png' className='index-shop-shirt-img'></img>
                  <div className="lines-container">
                      <div className="ovular-shape"></div>
                      <div className="ovular-light"></div>
                  </div>
                  <div className='product-description-div'>
                        <h3>Plain Tee</h3>
                        <h6>$199</h6>
                  </div>
                </div>
              </div>
            
              <div className='index-shop-item'>
                <div className='index-glass'>
                  <img src='/hoodie.webp' className='index-shop-shirt-img'></img>
                  <div className="lines-container">
                      <div className="ovular-shape"></div>
                      <div className="ovular-light"></div>
                  </div>
                  <div className='product-description-div'>
                        <h3>Plain Tee</h3>
                        <h6>$199</h6>
                  </div>
                </div>
              </div>

              <div className='index-shop-item'>
                <div className='index-glass'>
                  <img src='/crewsweater.png' className='index-shop-shirt-img'></img>
                  <div className="lines-container">
                      <div className="ovular-shape"></div>
                      <div className="ovular-light"></div>
                  </div>
                  <div className='product-description-div'>
                        <h3>Plain Tee</h3>
                        <h6>$199</h6>
                  </div>
                </div>
              </div>

              <div className='index-shop-item'>
                <div className='index-glass'>
                  <img src='/kaws.png' className='index-shop-shirt-img'></img>
                  <div className="lines-container">
                      <div className="ovular-shape"></div>
                      <div className="ovular-light"></div>
                  </div>
                  <div className='product-description-div'>
                        <h3>Plain Tee</h3>
                        <h6>$199</h6>
                  </div>
                </div>
              </div>

              <div className='index-shop-item'>
                <div className='index-glass'>
                  <img src='/mask.png' className='index-shop-shirt-img'></img>
                  <div className="lines-container">
                      <div className="ovular-shape"></div>
                      <div className="ovular-light"></div>
                  </div>
                  <div className='product-description-div'>
                        <h3>Plain Tee</h3>
                        <h6>$199</h6>
                  </div>
                </div>
              </div>

              <div className='index-shop-item'>
                <div className='index-glass'>
                  <img src='/fitted.png' className='index-shop-shirt-img'></img>
                  <div className="lines-container">
                      <div className="ovular-shape"></div>
                      <div className="ovular-light"></div>
                  </div>
                  <div className='product-description-div'>
                        <h3>Plain Tee</h3>
                        <h6>$199</h6>
                  </div>
                </div>
              </div>
          
              </div>
              </div>
        </div>
      {/* )} */}
    </div>
  );
}

export default Home;







{/* <div className='index-shop-item'>
<div className='index-glass'>
<ReactTilt settings={{ speed: 500, scale: 1.1, }} callbacks={{ onMouseMove: (el) => myFunc(el),}}
    style={style}
    className="tilt-elem my-tilt"
    onTiltChange={handleTiltChange}
  >
  <img src='/shirt.png' className='index-shop-shirt-img'></img>
  </ReactTilt>
  <img src='/shirt.png' className='index-shop-shirt-img'></img>

  <div className="lines-container">
      <div className="line horizontal-line horizontal-line1"></div>
      <div className="line horizontal-line horizontal-line2"></div>
      <div className="line vertical-line vertical-line1"></div>
      <div className="line vertical-line vertical-line2"></div>
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
      <div class="line4"></div>
      <div className="ovular-shape"></div>
      <div className="ovular-light"></div>
     
  </div>
  <div className='product-description-div'>
        <h3>Plain Tee</h3>
        <h6>$199</h6>
  </div>
  </div>
</div> */}