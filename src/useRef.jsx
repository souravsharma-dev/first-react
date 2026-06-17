import {useRef} from 'react'

const useRefExample = () => {

  const h1 = useRef(null)

const test = () => {
  console.log(h1.current)
  h1.current.style.color = "grey"
  h1.current.style.backgroundColor = "white"
  h1.current.style.fontSize ="50px"
  h1.current.style.fontWeight = "bold"
  alert("Button clicked!")
}

  return(
    <div>
      <h1 ref={h1}>My Name is Mr.Sourav Sharma BCA MCA 2025</h1>
      <button onClick={test}>Click Here</button>
    </div>
  )
}

export default useRefExample