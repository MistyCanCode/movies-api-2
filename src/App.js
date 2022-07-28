
import './App.css';
import Movies from './Components/Movies/Movies';
// import React, { useState, useEffect } from 'react'

// function App() {

//   const [movies, setMovies] = useState([])
//   const [favourites, setFavourites] = useState([])
//   const [searchValue, setSearchValue] = useState('')

//   const [endPoint, setEndPoint] = useState('')

//   const [container, setContainer] = useState([])

//   const [finalPoint, setFinalPoint] = useState('')

  
//   const getMovies = () => {

//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'f0ac5ede86msh263ca967f67a09dp12b34bjsnd5a50deecddb',
//         'X-RapidAPI-Host': 'moviesdb5.p.rapidapi.com'
//       }
//     };

//     fetch(`https://moviesdb5.p.rapidapi.com/om?t=${endPoint}`, options)
//       .then(response => response.json())
//       .then(response => console.log(response))
//       .then(response => {
//         setMovies(response)
//       })
//       .catch(err => console.error(err));
//   }
  
//   useEffect(()=> {
//     getMovies(searchValue)
//   }, [searchValue])

//   const changeHandler = (e) => {
//     setSearchValue(e.target.value)
//   }

//   const submitHandler = (e) => {
//     e.preventDefault()
//     setFinalPoint(endPoint)
//   }
  

//   return (
//     <div className="App">
//       <form onSubmit={submitHandler}>
//         <input type="text" value={endPoint} onChange={changeHandler} />
//         <button type="submit">Submit</button>
//       </form>
//     <div className="element">
//       {/* {container.map((item, index) => {
//         return (
//           <div key={index} className='element-div'>
//             <p>{item.Title}</p>
//             <img src={item.Poster} alt=""/> 
//             <p>{item.Year}, {item.Runtime}, {item.Rated}</p>
//             <p>{item.Genre}</p>
//             <p>{item.Actors}</p>
//             <p>{item.Plot}</p>
//           </div>
//         )
//       })} */}
//     </div>
//     </div>
//   );
// }

// export default App;

function App() {
  return (
    <div className="App">
      <Movies/>
    </div>
  );
}

export default App;