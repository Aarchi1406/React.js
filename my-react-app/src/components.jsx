import React from "react";


function Heading(){
    return <h1>My favourite Food</h1>
} 
export {Heading};

function List(){
    return <div><ul>
            <li>Pizza</li>
            <li>Burger</li>
            <li>Noodles</li>
        </ul>
        </div>
}
export {List};

function add(a1,a2){
    return a1+a2
}

function multiply(b1,b2){
    return b1*b2
}

function subtract(c1,c2){
    return c1-c2
}

function divide(d1,d2){
    return d1/d2
}


function Card(props){
    return (
        <div>
            <h2>{props.name}</h2>
            <img src={props.img}
            alt = "image"></img>
            <p>{props.tel}</p>
            <p>{props.email}</p>
            </div>
    );
}



export {add,multiply,subtract,divide,Card }