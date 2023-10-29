import React from 'react';
import { useSelector } from 'react-redux';

const OrderConfirm = () => {
    const order = useSelector(state => state.OrderReducer)
    const pizza = useSelector(state => state.PizzaReducer)
    return (
        <div className="bg-blue-200 p-4 rounded-lg shadow-md  ">
            <h2 className="text-xl font-bold text-blue-800 mb-2">Congratulations, your order is confirmed</h2>
            <div className="mb-2">
                <strong>Name: {order.name}</strong>
            </div>
            <div className="mb-2">
                <strong>email:{order.email}</strong>
            </div>
            <div className="mb-2">
                <strong>Phone:{order.phone}</strong>
            </div>
            <div>
                <strong>Cost: {pizza.totalCartPrice}</strong>
            </div>
        </div>
    );
};

export default OrderConfirm;