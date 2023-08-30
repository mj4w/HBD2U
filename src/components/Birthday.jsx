import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ImgBday from '../assets/bday.png';
import ReactConfetti from 'react-confetti';

function formatDateString(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function Birthday() {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const text = params.get('name')
    const selectedDate = params.get('date');
    const age = params.get('age');
    const formattedDate = selectedDate ? formatDateString(selectedDate) : null;

    const [randomMessageIndex, setRandomMessageIndex] = useState(0);

    // Random Messages
    const birthdayMessages = [
        `Wishing you a fantastic birthday! ${text}`,
        `May your day be filled with joy and happiness! ${text}`,
        `Happy birthday! ${text} Make a wish and let it come true!`,
        `Another year older, but still as amazing as ever! ${text}`,
        `Your birthday ${text} is a special day. Enjoy every moment of it!`,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setRandomMessageIndex((prevIndex) => {
                return (prevIndex + 1) % birthdayMessages.length;
            });
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []); 



    return (
        <>
            <ReactConfetti />
            <div className='flex flex-col h-screen bg-[#736bda] p-4'>
                <div className='flex flex-grow flex-col justify-center items-center h-[50%] bg-[#030027] md:w-[50%] w-[100%] mx-auto my-5 rounded-2xl'>
                    <h1 className='text-center text-[#d8dbe2] md:text-8xl text-7xl font-semibold font-birthday'>Happy <span className='age__birthday text-5xl'> {age}</span><span className='text-[#ff3af5]'> Birthday!</span></h1>
                    {formattedDate && (
                        <div className='text-center text-[#d8dbe2] text-lg mt-4 p-4 font__all'>
                            {birthdayMessages[randomMessageIndex]}
                            <p className='text-center mt-4 text-[#7851a9]'>{formattedDate}</p>
                        </div>
                    )}
                    <img src={ImgBday} className='w-[40%]' />
                </div>

            </div>
        </>

    );
}

export default Birthday;


