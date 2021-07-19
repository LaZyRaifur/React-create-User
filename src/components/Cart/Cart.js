import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalIncome = cart.reduce((sum, person) => sum + person.income*12,0);
    return (
        <div>
            <h2>this is cart: {cart.length}</h2>
            <p>Total YearlyIncome: {totalIncome}</p>
            
        </div>
    );
};

export default Cart;