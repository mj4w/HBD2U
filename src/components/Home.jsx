import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function getOrdinalSuffix(number) {
    if (number === 11 || number === 12 || number === 13) {
        return 'th';
    }
    const lastDigit = number % 10;
    switch (lastDigit) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}

function Home() {
    const [selectedDate, setSelectedDate] = useState('');
    const [text, setText] = useState('');
    const [userAge, setUserAge] = useState(null);
    const navigate = useNavigate();

    const onChangeDate = (e) => {
        setSelectedDate(e.target.value);
    };

    const onChangeText = (e) => {
        setText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedDate && text) {
            navigate(`/birthday?name=${text}&date=${selectedDate}&age=${ageWithOrdinal}`);
        }
    };

    // Calculate age
    useEffect(() => {
        if (selectedDate) {
            const birthDate = new Date(selectedDate);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();

            if (today.getMonth() < birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
                setUserAge(age - 1);
            } else {
                setUserAge(age);
            }
        }
    }, [selectedDate]);

    // Add ordinal suffix to the age
    const ageWithOrdinal = userAge !== null ? `${userAge}${getOrdinalSuffix(userAge)}` : '';

    return (
        <>
            <div className='flex flex-col h-screen'>
                <div className='flex flex-grow flex-col justify-center items-center h-screen bg-[#030027]'>
                    <h1 className='text-center text-[#d8dbe2] text-2xl font-semibold'>Select your Birthday!</h1>
                    <form className='mt-4 flex flex-col items-center' onSubmit={handleSubmit}>
                        <input
                            type='text'
                            className='mb-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 w-[78%]'
                            placeholder='Insert Nickname'
                            onChange={onChangeText}
                            required
                        />
                        <input
                            type='date'
                            className='mb-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-[#7851a9]'
                            value={selectedDate}
                            onChange={onChangeDate}
                            required
                        />
                        <button className='rounded-md mt-5 text-[#d8dbe2] bg-[#a648a2] px-4 py-2'>Submit</button>
                    </form>
                </div>
                <footer>
                    <div className='text-center bg-[#030027] text-[#d8dbe2] '>Credits: MJ</div>
                </footer>
            </div>
        </>
    );
}

export default Home;
