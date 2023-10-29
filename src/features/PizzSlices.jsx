// pizzaSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialPizzas = {
    pizzas: [
        {
            id: 1,
            title: "Margherita Pizza",
            Des: "Classic tomato and mozzarella cheese pizza.",
            basePrice: 10.99,
            saladPrice: 2,
            cheesePrice: 1,
            saucePrice: 0.5,
            toppings: { salad: false, cheese: false, sauce: false },
            count: 0,
            totalPrice: 0,
        },

    ],
    totalCartPrice: 0,
};

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState: initialPizzas,
    reducers: {
        showPizzas: (state) => state,
        addPizzas: (state, action) => {
            const { id, toppings } = action.payload;
            const pizza = state.pizzas.find((p) => p.id === id);

            if (pizza) {
                let totalPrice = pizza.basePrice;
                if (toppings.salad) {
                    totalPrice += pizza.saladPrice;
                }
                if (toppings.cheese) {
                    totalPrice += pizza.cheesePrice;
                }
                if (toppings.sauce) {
                    totalPrice += pizza.saucePrice;
                }

                pizza.count += 1;
                pizza.totalPrice += totalPrice;

                state.totalCartPrice = totalPrice;
            }
        },
        updatePizzas: (state, action) => {
            state.pizzas = action.payload;
        },
    },
});

export const { showPizzas, addPizzas, updatePizzas } = pizzaSlice.actions;
export default pizzaSlice.reducer;
