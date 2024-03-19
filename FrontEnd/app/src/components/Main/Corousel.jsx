import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Corousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className={`carousel-item ${activeIndex === 0 ? "active" : ""}`}>
                        <img
                            className="d-block w-100"
                            src="https://flowershut.com/pub/media/images/landing/gift/gift_banner.png"
                            alt="First slide"
                            height="500px"
                        />
                    </div>
                    <div className={`carousel-item ${activeIndex === 1 ? "active" : ""}`}>
                        <img
                            className="d-block w-100"
                            src="https://thegiftstudio.com/cdn/shop/files/Desktop_image_-_Corporate_Banner.jpg?v=1695301383&width=1920"
                            alt="Second slide"
                            height="500px"
                        />
                    </div>
                    <div className={`carousel-item ${activeIndex === 2 ? "active" : ""}`}>
                        <img
                            className="d-block w-100"
                            src="https://flowershut.com/pub/media/images/landing/anniversary/anniversary_banner.png"
                            alt="Third slide"
                            height="500px"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Corousel;
