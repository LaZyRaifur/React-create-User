import React from 'react';
import './Person.css';

const Person = (props) => {
    const {image,name,address,phone,income,jobtitle} = props.person;
    const handleAddPerson = props.handleAddPerson;
    return (
        <div className="person">
            <div>
                <img src={image} alt="" />
                <div>
                <button className="main-button" onClick={() => {handleAddPerson(props.person)}}>{name}</button>
                </div>
            </div>
            <div>
                <h4 className="person-name">{name}</h4>
                <p>Address: {address}</p>
                <p>Phone no: {phone}</p>
                <p>Income: ${income}</p>
                <p>Job Title: {jobtitle}</p>

            </div>
        </div>
    );
};

export default Person;