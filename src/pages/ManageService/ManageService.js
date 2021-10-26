import React, { useState, useEffect } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import swal from 'sweetalert';


const ManageService = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    // Delete Activities
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/services/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log('deleted One', data);
                if (data.deletedCount) {
                    // added sweet alert; 
                    swal("Good job!", "Deleted Successfull!", "success");

                    const remainingUser = services.filter(service => service._id !== id);
                    setServices(remainingUser);
                }

            })
    }

    return (
        <div>
            <h2>{services.length} </h2>
            <h3>This is ManageServices</h3>
            {
                services.map(service => <div className="mt-5"
                    key={service._id}>
                    <h5>"{service.name}" </h5>
                    <RiDeleteBin5Line onClick={() => handleDelete(service._id)} className="ms-5 me-4" />
                    <BiEditAlt />
                </div>)
            }
        </div>
    );
};

export default ManageService;