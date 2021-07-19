import React, { useEffect, useState } from 'react';
import personData from'../../Data/data.json';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './User.css';

const User = () => {
    const Person15 = personData.slice(0,15);

    const[person,setPerson] = useState(Person15);
    const [cart,setCart] = useState([]);
    useEffect(() =>{
        setPerson(personData);
        console.log(personData);
    },[])

    //for user yearly income

    const handleAddPerson = (person) =>{
        console.log("added",person);
        const newCart = [...cart,person];
        setCart(newCart);
    }
    return (
        <div className="user-container">
            <div className="person-container">
            <ul>
                {
                    person.map(person =><Person person={person} handleAddPerson={handleAddPerson}></Person>)
                }
            </ul>
        </div>
        <div>
       
        </div>
        <Cart cart={cart}></Cart>
        </div>
    );
};

export default User;