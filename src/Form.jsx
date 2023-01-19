import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
export default function Form(){
    const [rating,setRating]=useState('');
    const [name,setName]=useState('');
    const [message,setMessage]=useState('');
    const handleRating = (rate) => {
        setRating(rate);
        
    }
    const formSubmit = (e) =>{
        e.preventDefault();
        const review = {
            id:1,
            name,
            message,
            rating:rating
        }
       console.log(review);
        
    }
    const isDisabled = () =>{
        if(!name || !message || !rating>0){
            return true;
        }
    }






    return(
        <form className='mt-5' onSubmit={(e) => formSubmit(e)}>
            <div className='mb-3'>
                <label htmlFor='name' className='form-label'>Nom</label>
                <input type='text' name='name' className='form-control' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='mb-5'>
                <label htmlFor='message' className='form-label'>Message</label>
                <textarea className='form-control' name='message' placeholder='message' value={message} onChange={(e) => setMessage(e.target.value)} rows='3'></textarea></div>
                <div className='mb-3'>
                    <Rating 
                    onClick={handleRating}
                    ratingValue={rating}/>
                     

                </div>
                <div className='mb-3'>
                    <button type='submit'disabled={isDisabled()} className='btn btn-primary mb-3'>Submit</button>
                </div>
</form>    
    )
}