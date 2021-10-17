import { height } from 'dom-helpers';
import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../Images/notFound(4O4)/404.jpg';

const NotFound = () => {
    return (
        <div>
            <h3>This is not Found.</h3>
            <img style={{ height: '300px' }} src={notfound} alt="" /> <br /> <br /> <br />
            <Link className="mb-5" to="/">
                <button>
                    Go Back
                    <i className="ms-3 fas fa-arrow-left"></i>
                </button>
            </Link>
        </div>
    );
};

export default NotFound;