import React from 'react';
import './Header.css';
import saree from '../../assets/Image/Header/main-saree.webp';
import sweatshirt from '../../assets/Image/Header/main-sweatshirt.webp';
import kurta from '../../assets/Image/Header/main-kurta.jpeg';
import dress from '../../assets/Image/Header/main-dress.webp';
import mainImage from '../../assets/Image/MainImage/main-Image.jpg';
import summer from '../../assets/Image/Header/main-summer.webp';
import winter from '../../assets/Image/Header/main-winter.webp';


export function Header() {
    return (
        <div className="container">
            <div className="upper-section-1">
                <img className="upper-image" src={saree} />
                <div className="upper-btn">Saree</div>
            </div>
            <div className="upper-section-2">
                <img className="upper-image" src={kurta} />
                <div className="upper-btn">Ethnic</div>
            </div>
            <div className="upper-section-3">
                <img className="upper-image" src={dress} />
                <div className="upper-btn">Dress</div>
            </div>
            <div className="upper-section-4">
                <img className="upper-image" src={sweatshirt} />
                <div className="upper-btn">Sweatshirt</div>
            </div>
            


            <main className="mid-main">
                <img className="main-image" src={mainImage} />
                <div className="mid-main-content-wrapper">
                    
                    
                    <h1 className="mid-main-content-a">Festive Season</h1>
                    <h2 className="mid-main-content-a">SALE IS LIVE!</h2>
                    <h2 className="mid-main-content-a">20-80% OFF</h2>
                
                  
                </div>
            </main>
        
            <div className="lower-section-1">
                <div className="lower-card">
                    <div className="lower-card-1">
                        <img className="lower-card-img" src={summer} />
                    </div>
                    <div className="lower-card-2">
                        <h5 className="lower-content-1">New Arrivals</h5>
                        <div className="lower-content-2">
                            <h3 className="content-1">Winter Collection</h3>
                            <p className="content-2">Check out our best winter collection to stay warm in style this season.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lower-section-2">
                <div className="lower-card">
                    <div className="lower-card-1">
                        <img className="lower-card-img" src={winter} />
                    </div>
                    <div className="lower-card-2">
                        <h5 className="lower-content-1">New Arrivals</h5>
                        <div className="lower-content-2">
                            <h3 className="content-1">Winter Collection</h3>
                            <p className="content-2">Check out our best winter collection to stay warm in style this season.</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    )
}