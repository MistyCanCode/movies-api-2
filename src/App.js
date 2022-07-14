
import './App.css';
import React, {useState, useEffect} from 'react'

function App() {

  const [endPoint, setEndPoints] = useState('')

  const [container, setContainer] = useState([])

 useEffect(() => {
  fetchMe()
 }, [endPoint])

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f0ac5ede86msh263ca967f67a09dp12b34bjsnd5a50deecddb',
      'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
  };
  
  const fetchMe = () => {
    fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${endPoint}`, options)
      .then(response => response.json())
      .then(response => console.log(response))
      .then(data => setContainer(data))
    .catch(err => console.error(err));
  }

    const onChangeHandler = (e) => {
      setEndPoints(e.target.value)
    }

    const submitHandler = e => {
      e.preventDefault()
    }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" value={endPoint} onChange={onChangeHandler}/>
        <button type="submit">Submit</button>
      </form>

      {container.map((item) => {
        return (
          <div>
            {/* <img src={item.i.imageUrl} alt=""/> */}
            <p>{item.l}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
