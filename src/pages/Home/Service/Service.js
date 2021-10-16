import React from 'react';
import './service.css'

const Service = (props) => {
    const { name, price, description, img } = props.service
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 details ">
            <img src={img} alt="" />
            <div className="mt-3">
                <h3>{name} </h3>
                <h5> Charge: ${price} </h5>
                <small>Description : {description}</small>
            </div>
        </div>

    );
};

export default Service;