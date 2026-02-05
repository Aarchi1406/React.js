/* import animals from "./data.jsx";


function Index(){
    const [cat, dog] = animals;
    const {name , sound} = cat;
    return <div>
        <h1>{name}</h1>
        <h1>{sound}</h1>  
    </div>
}

export default Index; */


import React, {useState} from "react";
function Index(){

    const[fullName, setFullName] = useState({
        fName : "",
        lName : "",
        email : ""
    });

    /* function updatefName(event){
        const firstName = event.target.value;
        setFName(firstName);
    }

    function updatelName(event){
        const lastName = event.target.value;
        setLName(lastName);
    }  */


    function handleChange(event){
        const newValue = event.target.value;
        const inputName = event.target.name;

    setFullName(preValue => {
        if (inputName === "fName") {
            return {
            fName: newValue,
            lName: preValue.lName,
            email: preValue.email
            };
        } else if (inputName === "lName") {
            return {
            fName: preValue.fName,
            lName: newValue,
            email: preValue.email
            };
        } else if (inputName === "email") {
            return {
            fName: preValue.fName,
            lName: preValue.lName,
            email: newValue
            };
        }
        return preValue;
});


    

    /* if (inputName == "fName"){
        setFullName({fName : newValue});
    }
    else if (inputName == "lName"){
        setFullName({lName : newValue});
    }
*/
    }
    return(
        <div className = "container">
            <h1>Hello {fullName.fName} {fullName.lName} </h1>
                <h3>{fullName.email}</h3>
            <form>
                <input 
                    name = "fName"
                    onChange={handleChange}
                    placeholder = "first name" 
                    value = {fullName.fName}>
                </input>

                <input 
                    name = "lName" 
                    onChange={handleChange}
                    placeholder = "last name"
                    value = {fullName.lName}>
                </input>

                <input 
                    name = "email" 
                    onChange={handleChange}
                    placeholder = "EmailID"
                    value = {fullName.email}>
                </input>

                <button>submit</button>
            </form>
        </div>
    )
}

export default Index;