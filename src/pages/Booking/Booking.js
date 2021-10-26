/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {

        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div>
            <h2> Name  :  {service.name} </h2>
            <h3>BOKKING: {serviceId} </h3>


            <Link to="/home#services">
                <button>Back to services</button>
            </Link>
        </div>
    );
};

export default Booking;