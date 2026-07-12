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
      <h1>Fetch Data from API</h1>
      <button onClick={testdata}>Click me nowwww to Fetch Data</button>
    </div>
  );
}

export default App;