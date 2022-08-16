import React from 'react'
import Navbar from '../app/components/Navbar.jsx'
import Card from '../app/components/Card.jsx'
import data from './fake apis/data.js'


export default function App() {
  const cards = data.map(t => <Card
      key = {t.key}
      {...t}
    />
    )
  return (
    <div className='wrapper'>
      <Navbar />
      <section>{cards}</section>
    </div>
  )
}
