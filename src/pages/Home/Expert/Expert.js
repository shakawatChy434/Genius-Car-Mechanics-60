import React from 'react';

const Expert = (props) => {
    const { name, img, expertize } = props.expert
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 details">
            <img src={img} alt="Expets Img couldn't included" />
            <h3>{name}</h3>
            <p>{expertize} </p>
        </div>
    );
};

export default Expert;