import "./App.css";

const name = "John Doe";
const date = new Date();
const year = date.getFullYear();
const customStyle = {
  color:"blue",
  border : " 1px solid black"

}

function App() {
  return (
    <div>
      <p>Created by {name}</p>
      <p> Copyrigh year {year}</p>
      <h1 style = {customStyle}>Hello World!</h1>
      <h1>My Favourite Food</h1>
      <ul>
        <li>Pizza</li>
        <li>Burger</li>
        <li>Sushi</li>
        <li>Pasta</li>
        <li>Ice Cream</li>
      </ul>
      <h1>Hello {name}!</h1>
      <p>My favorite number is {Math.floor(Math.random() * 10)}.</p>
    </div>
  );
}

//HTML attributes: use camelCase  

export default App;








