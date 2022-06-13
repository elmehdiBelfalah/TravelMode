import React from 'react';
import './Card.css'
import CardItems from '../pages/CardItems';
import src1 from '../images/img-9.jpg';
import src2 from '../images/img-4.jpg';
import src3 from '../images/img-2.jpg';

const Card = () => {
    
    return (
        <div className='card'>
            <h1>Check out these epic destination </h1>
            <div className="card_container">
                <div className="card_wrapper">
                    <ul className="card_items">
                        <CardItems
                        src={src1}
                        text='Explore the hidden waterfall deep insise the amazone jungle'
                        label='Adventures'
                        path='./Services' 
                        /> 
                        <CardItems
                        src={src2}
                        text='Play a football match  in a fantastic stadium in Malysia'
                        label='Experience'
                        path='./Services' 
                        /> 
                         <CardItems
                        src={src3}
                        text='The Maldives is always a good idea…! '
                        label='Paradise'
                        path='./Services' 
                        /> 
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Card;
