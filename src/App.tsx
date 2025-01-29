import { useState } from 'react'
import './App.css'
import { loginUrl } from './utils/spotifyLogin'

function App() {
  const [count, setCount] = useState(0)
  const [loggedIn, setLoggedIn] = useState(false)


  return (
    <>
      <h1>Spotify Exporter</h1>
      <div className="card">
        <a href={loginUrl} id='signInButton' target="_blank"><button className="spotify-color">Log In with Spotify</button></a>
        <p>
          {loggedIn ? 
          <></>
          : 
          <span className="italic">You are currently not logged in...</span> 
          }
        </p>
      </div>
    </>
  )
}

export default App
