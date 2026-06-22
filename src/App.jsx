const app = () => {
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((users)=> {
      console.log("users", users);
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
    
  </div>
</div>
);  
}
export default app;