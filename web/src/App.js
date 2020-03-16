import React, { useEffect, useState } from 'react';
import api from './services/api'

import './App.css'
import './global.css'
import './Sidebar.css'
import './Main.css'

function App() {
  const [github_username, setGithubUsername] = useState('')
  const [techsArray, setTechsArray] = useState('')
  const [latitude, setLatitude ] = useState('')
  const [longitude, setLongitude] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
        
        setLatitude(latitude)
        setLongitude(longitude)
      }, (err) => {
        console.log(err)
      },
      {
        timeout: 30000,
      }
    )
  },[])

  async function handleAddDev(e) {
    e.preventDefault()

    const response = await api.post('/users', {
      github_username,
      techsArray,
      latitude,
      longitude
    })

    console.log(response.data)
  }

  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className='input-block'>
            <label htmlFor='github_username'>Usuário do Github</label>
            <input 
              name='github_username' 
              id='github_username' 
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className='input-block'>
            <label htmlFor='techs'>Tecnologias</label>
            <input 
              name='techsArray' 
              id='techsArray'
              required  
              value={techsArray}
              onChange={e => setTechsArray(e.target.value)}
            />
          </div>

          <div className='input-group'>
            <div className='input-block'>
              <label htmlFor='latitude'>Latitude</label>
              <input 
                name='latitude' 
                type='number'
                id='latitude' 
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className='input-block'>
              <label htmlFor='longitude'>Longitude</label>
              <input 
                name='longitude'
                type='number' 
                id='longitude' 
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)} 
              />
            </div>
          </div>
        
          <button type='submit'>Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className='dev-item'>
            <header>
              <img src='' alt=''></img>
              <div className='user-info'>
                <strong>Renan Guedes</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Blablablablabla</p>
            <a href='https://github.com/renanGuedes10'>Acessar perfil no github</a>
          </li>
          <li className='dev-item'>
            <header>
              <img src='' alt=''></img>
              <div className='user-info'>
                <strong>Renan Guedes</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Blablablablabla</p>
            <a href='https://github.com/renanGuedes10'>Acessar perfil no github</a>
          </li>
          <li className='dev-item'>
            <header>
              <img src='' alt=''></img>
              <div className='user-info'>
                <strong>Renan Guedes</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Blablablablabla</p>
            <a href='https://github.com/renanGuedes10'>Acessar perfil no github</a>
          </li>
          <li className='dev-item'>
            <header>
              <img src='' alt=''></img>
              <div className='user-info'>
                <strong>Renan Guedes</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Blablablablabla</p>
            <a href='https://github.com/renanGuedes10'>Acessar perfil no github</a>
          </li>
        </ul>
      </main>  
    </div>
 )
}

export default App;
