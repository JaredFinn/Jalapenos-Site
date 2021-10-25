import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import chimi from "../../images/chimi.jpg";
import nachos from "../../images/nachos.jpg";
import quesadilla from "../../images/quesadilla.jpg";


export const Food: React.FC = () => {
    return (
        <div className="food-images">
            <Carousel fade>
                <Carousel.Item interval={2000}>
                    <img className="d-block w-100"
                    src={chimi}
                    alt="Chimichanga"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img className="d-block w-100"
                    src={nachos}
                    alt="Nachos"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img className="d-block w-100"
                    src={quesadilla}
                    alt="Quesadilla"
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