const App = () => {

  const testdata = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      console.log("success", response.json())
    })
    .catch((error) => {
      console.log("failed", error)
    })
  }

  return (
    <div>
      <button onClick={testdata}>Click Me to Fetch Data</button>
    </div>
  );
}

export default App;