import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Expert from '../Expert/Expert';
import './Experts.css'

const Experts = () => {
    const [experts, setExperts] = useState([])

    useEffect(() => {
        fetch('./ourExperts.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div id="experts" className="container">
            <div className="row">
                <h1 className="text-primary mt-5">OUR EXPERTS</h1>
                <div className="row total-details">
                    {
                        experts.map(expert => <Expert
                            key={expert.id}
                            expert={expert}
                        ></Expert>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Experts;