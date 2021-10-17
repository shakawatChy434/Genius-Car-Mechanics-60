import React from 'react';
import { Fa500Px } from "react-icons/fa";
import { MdPermIdentity, } from "react-icons/md";

const Expert = (props) => {
    const { name, img, expertize } = props.expert
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 details">
            <img src={img} alt="Expets Img couldn't included" />
            <h3>{name}</h3>
            <p>{expertize} </p>
            <button><MdPermIdentity></MdPermIdentity>  Hair Me.<Fa500Px></Fa500Px></button>
        </div>
    );
};

export default Expert;