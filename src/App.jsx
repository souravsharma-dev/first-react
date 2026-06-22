import {useState} from "react"

const App = () => {

  const [userData, setUserData] = useState([])

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((users)=> {
      console.log("users", users);
      setUserData(users);
    })  
    .catch((error)=>{
      console.log("error", error);
    })
  }
  // Http request using fetch API
return (
<div>
  <div
  style = {{
    width: "70%",
    margin: "0 auto",
  }}>
    <h1>Fetch Data</h1>
  </div>  
  <button 
  style={{ 
    background: "green", 
    width: "80px",
    padding: "7px",
    margin: "0 auto" }} 
  onClick={fetchData}>
    Fetch Data
  </button>

  <div style = {{
    marginTop: "22px",
  }}>
    {
      userData.map(() =>(
        <div style = {{
      border: "6px solid black",
      width: "70%",
      margin: "0 auto",
      padding: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      backgroundColor: "darkblue",
    }}>
      <h1 style = {{ color: "white", fontWeight: "bold" }}>Name</h1>
      <p style = {{ color: "white" }}>Username</p>
      <p style = {{ color: "white" }}>email</p>
      <p style = {{ color: "white" }}>address</p>

    </div>
      ))
    }
  </div>
</div>
);  
}
export default App;