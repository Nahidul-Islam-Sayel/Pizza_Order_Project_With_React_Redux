// HomePage.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import img1 from '../../assets/image/Pizza1.jpg';
import { addPizzas } from '../../features/PizzSlices';

const HomePage = () => {
    const pizza = useSelector((state) => state.PizzaReducer.pizzas[0]);
    const [toppings, setToppings] = useState({ salad: false, cheese: false, sauce: false });
    const dispatch = useDispatch();

    const handleTopping = (topping) => {
        setToppings((prevToppings) => ({ ...prevToppings, [topping]: !prevToppings[topping] }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addPizzas({ id: pizza.id, toppings }));
        console.log(pizza)
    }

    // Calculate the initial price based on basePrice and display it
    const initialPrice = pizza.basePrice.toFixed(2);

    // Calculate the updated price based on selected toppings
    let updatedPrice = pizza.basePrice;
    if (toppings.salad) {
        updatedPrice += pizza.saladPrice;
    }
    if (toppings.cheese) {
        updatedPrice += pizza.cheesePrice;
    }
    if (toppings.sauce) {
        updatedPrice += pizza.saucePrice;
    }

    return (
        <div>
            <div className="bg-cover bg-center py-16 text-black">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">Delicious Pizza Delivered to Your Doorstep</h1>
                    <p className="text-xl mb-8">Order now and satisfy your pizza cravings!</p>
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-full transition duration-300 ease-in-out">
                        Order Now
                    </button>
                </div>
            </div>
            <div className="container mx-auto py-12">
                <h2 className="text-2xl font-semibold text-center mb-6">Our Menu</h2>
                <div className="flex justify-center">
                    <div className="p-4 border border-gray-300 rounded-lg">
                        <img src={img1} alt="Pizza 1" className="w-full h-40 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{pizza.title}</h2>
                            <p className="text-gray-600">{pizza.Des}</p>
                            <p className="text-xl font-bold mt-2">Price: ${updatedPrice.toFixed(2)}</p>
                            <p className="text-xl font-bold mt-2">
                                {toppings.salad ? "Salad is added" : "Salad is not added"}
                            </p>
                            <p className="text-xl font-bold mt-2">
                                {toppings.cheese ? "Cheese is added" : "Cheese is not added"}
                            </p>
                            <p className="text-xl font-bold mt-2">
                                {toppings.sauce ? "Sauce is added" : "Sauce is not added"}
                            </p>
                            <button className={`mr-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out ${toppings.cheese ? 'bg-red-500' : ''}`}
                                onClick={() => handleTopping("cheese")}
                            >
                                {toppings.cheese ? "Remove Cheese" : "Add Cheese"}
                            </button>
                            <button className={`mr-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out ${toppings.salad ? 'bg-red-500' : ''}`}
                                onClick={() => handleTopping("salad")}
                            >
                                {toppings.salad ? "Remove Salad" : "Add Salad"}
                            </button>
                            <button className={`mr-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out ${toppings.sauce ? 'bg-red-500' : ''}`}
                                onClick={() => handleTopping("sauce")}
                            >
                                {toppings.sauce ? "Remove Sauce" : "Add Sauce"}
                            </button>
                            <br />
                            <button className="bg-blue-950 hover:bg-blue-850 text-white font-semibold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out"
                                onClick={handleSubmit}
                            >
                                Add To Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
