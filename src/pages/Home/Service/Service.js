import React from 'react';
import './service.css'

const Service = (props) => {
    const { name, price, description, img } = props.service
    return (
        <div className="single-service">
            <div className="img-details">
                <img src={img} alt="" />
            </div>
            <div className="service-details">
                <h3>{name} </h3>
                <h5> Charge: ${price} </h5>
                <small>Description : {description}</small>

            </div>

        </div>
    );
};

export default Service;