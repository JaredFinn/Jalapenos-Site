import React from "react";
import Carousel from 'react-bootstrap/Carousel';

export const Food: React.FC = () => {
    return (
        <div className="food-images">
            <img src='burrito.png'/>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                    src="burrito.png"
                    alt="Burrito"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
        </div>
    );
}