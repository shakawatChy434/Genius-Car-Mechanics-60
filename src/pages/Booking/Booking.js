import React from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h3>BOKKING: {serviceId} </h3>
        </div>
    );
};

export default Booking;