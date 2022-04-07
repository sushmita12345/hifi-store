
import mainImage from '../../assets/Image/MainImage/main-Image.jpg';
import summer from '../../assets/Image/Header/main-summer.webp';
import winter from '../../assets/Image/Header/main-winter.webp';

export function CategoryPage() {

    
    return (
        <div className="container">

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
                            <h3 className="content-1">Summer Collection</h3>
                            <p className="content-2">Check out our best summer collection to stay warm in style this season.</p>
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