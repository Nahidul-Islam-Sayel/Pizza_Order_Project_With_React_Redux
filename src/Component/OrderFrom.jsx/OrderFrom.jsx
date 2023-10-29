import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setOrderField } from '../../features/orderSlice';
const OrderForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        phone: '',
        paymentMethod: '',
    });
    const order = useSelector((state => console.log(state)))
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });


    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setOrderField({ formData }));
        console.log(formData); // You can handle the order confirmation here
        navigate("/OrderConfirm", { replace: true });
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg sm:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto mt-20">
            <h2 className="text-2xl font-semibold mb-4 text-center">Confirm Your Order</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-semibold mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="address" className="block text-gray-700 text-sm font-semibold mb-2">
                        Address
                    </label>
                    <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-semibold mb-2">
                        Phone
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-semibold mb-2">Payment Method</label>
                    <select
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        required
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="credit_card">Credit Card</option>
                        <option value="paypal">PayPal</option>
                    </select>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full mt-4 transition duration-300 ease-in-out"
                    >
                        Confirm Order
                    </button>
                </div>
            </form>

        </div>
    );
};

export default OrderForm;
