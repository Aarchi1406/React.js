import "./App.css";
import {Heading,List,add,subtract,multiply,divide} from "./components.jsx"
import { Card } from "./components";
import image from "./assets/work1.png";

const name = "John Doe";
const date = new Date();
const year = date.getFullYear();
const customStyle1 = {
  color:"blue",
  border : " 1px solid black"
}
const time= date.getHours()
const customStyle2 = {color : " "}

let greeting ;
if (time < 12){
  greeting = "Good Morning !"
  customStyle2.color = "red";
}
else if (time < 18){
  greeting = "Good Afternoon !"
  customStyle2.color = "green";
}
 else{
  greeting = "Good Evening !"
  customStyle2.color = "blue";
 }


function App() {
  return (
     <div> 
      <h1 className = "Greetings" style = {customStyle2}>{greeting}</h1>
      <p>Created by {name}</p>
      <p> Copyrigh year {year}</p>
      <h1 style = {customStyle1}>Hello World!</h1>
      <h1>My Favourite Food</h1>
      <ul>
        <li>Pizza</li>
        <li>Burger</li>
        <li>Sushi</li>
        <li>Pasta</li>
        <li>Ice Cream</li>
      </ul>
      <h1>Hello {name}!</h1>
      <Heading/>
      <List/> 
      
      <ul>
        <li>{add(1,2)}</li>
        <li>{subtract(5,4)}</li>
        <li>{multiply(2,3)}</li>
        <li>{divide(4,2)}</li>
      </ul>
      <p>My favorite number is {Math.floor(Math.random() * 10)}.</p>
    

   <h1>My Contacts</h1>
      <Card
        name="Name1"
        img={image}
        tel="+123 456 789"
        email="abc@gmail.com"
      />

      <Card
        name="Name1"
        img={image}
        tel="+123 456 789"
        email="abc@gmail.com"
      />

      </div>
  );
}
    
 
//oredr of import and export does not matter 
//HTML attributes: use camelCase  

export default App;








