import {useState, useEffect} from "react"
import '@fortawesome/react-fontawesome'

const App = () => {

  useEffect(() => {
    fetchData();
  }, [])
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((users)=> {
      console.log("users", users);
      setUserData(users);
      setLoading(false);
    })  
    .catch((error)=>{
      console.log("error", error);
      setLoading(false);
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
    {loading && 
    (<div>
      <i className="fa fa-spinner fa-spin" style={{ fontSize: "24px", color: "white" }}></i>
      </div>)}
    {
      userData.map((user, index) =>(
        <div key={index} style = {{
      border: "6px solid black",
      width: "70%",
      margin: "0 auto",
      padding: "10px",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      backgroundColor: "darkblue",
    }}>
      <h1 style = {{ color: "white", fontWeight: "bold" }}>{user.name}</h1>
      <p style = {{ color: "white" }}>{user.username}</p>
      <p style = {{ color: "white" }}>{user.email}</p>
      <p style = {{ color: "white" }}>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>

    </div>
      ))
    }
  </div>
</div>
);  
}
export default App;