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

    const handleIndicatorClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators" style={{ listStyleType: 'none' }}>
                    <li
                        onClick={() => handleIndicatorClick(0)}
                        className={activeIndex === 0 ? "active" : ""}
                    ></li>
                    <li
                        onClick={() => handleIndicatorClick(1)}
                        className={activeIndex === 1 ? "active" : ""}
                    ></li>
                    <li
                        onClick={() => handleIndicatorClick(2)}
                        className={activeIndex === 2 ? "active" : ""}
                    ></li>
                </ol>
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
                            src="https://www.desertstreetmeerut.com/image/cache/catalog/slider/gift-1235x400.jpg"
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
