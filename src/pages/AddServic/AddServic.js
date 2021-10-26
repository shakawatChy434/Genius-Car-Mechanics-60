import axois from 'axios';
import swal from 'sweetalert';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'


const AddServic = () => {
    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        console.log(data);
        axois.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    // alert('awow..!!!!!!! added')
                    swal("Good job!", "You added the service!", "success");
                    reset();
                }
            })
    };
    return (
        <div className="add-service">
            <h3>This is add services</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="service name" />
                <textarea {...register("description")} placeholder="services description" />
                <input type="number" {...register("price")} placeholder="input price" />
                <input {...register("img")} placeholder='img-url' />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddServic;