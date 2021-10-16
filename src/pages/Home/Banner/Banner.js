import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
import banner1 from '../../../Images/banner/banner1.jpg';
import banner2 from '../../../Images/banner/banner2.jpg';
import banner3 from '../../../Images/banner/banner3.jpg';
import banner4 from '../../../Images/banner/banner4.jpg';
import banner5 from '../../../Images/banner/banner5.jpg';
import banner6 from '../../../Images/banner/banner6.jpg';

const Banner = () => {
    return (
        <>
            <Carousel className=" carousel-img">
                <Carousel.Item className="img-control">
                    <img
                        className="d-block w-100 "
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className="text-black">
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="img-control">
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="img-control">
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="img-control">
                    <img
                        className="d-block w-100"
                        src={banner4}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h3>Fourth slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="img-control">
                    <img
                        className="d-block w-100 "
                        src={banner5}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h3>Fifth slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="img-control">
                    <img
                        className="d-block w-100"
                        src={banner6}
                        alt="Third slide"
                    />

                    <Carousel.Caption className="text-black">
                        <h3>Sixth slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;