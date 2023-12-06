import {  } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import LocationSearch from './components/LocationSearch'
import LocationResults from './components/LocationResults'
import About from './components/About'
import WeatherDisplay from './components/WeatherDisplay'

function App() {


  return (
    <>
     <BrowserRouter>
      <div className='App'>
      <header>
          <h1>Weather App</h1>
          <nav>
            <Link to='/'>App</Link>
            <Link to='/about'>About</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path='/' element={(<>
              <LocationSearch />
              <LocationResults />
              <WeatherDisplay temperature={0} description={''} />
            </>)}></Route>
            <Route path='/about' element={<About />} />
          </Routes>
        </main>
        <h1>Hello World</h1>
       <h2>Weather App</h2>
      </div>
      </BrowserRouter>
    
    </>
  )
}

export default App


// <BrowserRouter>
// <div>
//   <header>
//     <h1>Weather App</h1>
//     <nav>
//       <Link to='/'>App</Link>
//       <Link to='/about'>About</Link>
//     </nav>
//   </header>
//   <main>
//     <Routes>
//       <Route path='/' element={(<>
//         <LocationSearch />
//         <LocationResults />
//         <WeatherDisplay />
//       </>)}></Route>
//       <Route path='/about' element={<About />} />
//     </Routes>

// <h1> Weather app</h1>
//   </main>

// </>
// </div>
// {/* <About />
// */}

// {/* <h1> Weather app</h1> */}

// </BrowserRouter>