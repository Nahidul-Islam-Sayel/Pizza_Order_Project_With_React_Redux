import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import img from '../../assets/image/Pizza1.jpg';
const Card = () => {
    const pizza = useSelector((state) => state.PizzaReducer.pizzas[0]);
    const price = useSelector((state) => state.PizzaReducer.totalCartPrice);
    return (
        <div className="max-w-xs mx-auto rounded-lg overflow-hidden shadow-lg bg-white mt-28">
            <img src={img} alt={pizza.title} className="w-full h-40 object-cover" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{pizza.title}</div>
                <p className="text-gray-700 text-base">{pizza.Des}</p>
            </div>
            <div className="px-6 py-4">
                <p className="text-gray-700 text-base">Price: {price}</p>
                <Link to="/Order"><button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out">
                    Confirm Order
                </button></Link>
            </div>
        </div>
    );
};

export default Card;