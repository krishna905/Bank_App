import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


export default function Ads() {
return (
    <div  className="foot"style={{ display: 'block', padding: 5 }}>
    
    <Carousel>
        <Carousel.Item interval={1500}>
            <img height={400} className="d-block w-100" src="https://av.sc.com/in/content/images/digismart-myntra-offer-for-online-shopping.jpg"  />
        </Carousel.Item>

        <Carousel.Item interval={1500}>
        <img height={400} className="d-block w-100 " src="https://images.yourstory.com/cs/2/9456dfb02d6c11e9aa979329348d4c3e/Imageu5sb-1612502958709.jpg "  />
       
        </Carousel.Item>

        <Carousel.Item interval={1500}>
        <img height={400} className="d-block w-100" src="https://d168jcr2cillca.cloudfront.net/uploadimages/coupons/12322-Abhibus_Offers_Coupons.jpg"  />
        
        
        </Carousel.Item>

        <Carousel.Item interval={1500}>
        <img height={400} className="d-block w-100" src="https://daho8y5ys694e.cloudfront.net/wp-content/uploads/2020/12/02172828/CN-1600x500px-C1.jpg"  />
        
        
        </Carousel.Item>
    </Carousel>
    </div>
);
}
