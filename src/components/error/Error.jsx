import React from 'react';
import './error.css'

const Error = () => {
    return (
        <div className='error__cont'>
            <h2 className='error__titulo'>Ups... Nada por aqui</h2>
            <img src='https://firebasestorage.googleapis.com/v0/b/ecomerce2024-7e06d.appspot.com/o/error.gif?alt=media&token=0cb613ef-af0b-4ef0-b57a-b11d6d8ea7f9' 
            alt="ERROR" className='error_img' />
        </div>
    );
};

export default Error;