import React from 'react';
import { Link } from 'react-router-dom';
import './service.css'
import { BsFillCaretRightSquareFill } from "react-icons/bs";


const Service = (props) => {
    const { name, _id, price, description, img } = props.service
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 details ">
            <img src={img} alt="" />
            <div className="mt-3">
                <h3>{name} </h3>
                <h5> Charge: ${price} </h5>
                <small>Description : {description}</small> <br />

                <Link to={`/booking/${_id}`}>
                    <button className="mt-3 px-3 py-2 booking-btn">
                        <BsFillCaretRightSquareFill className="me-3"></BsFillCaretRightSquareFill>
                        Booking :
                        {name.toLowerCase()}
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default Service;