import React, { Component, useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom';
import NaviBar from './components/NaviBar';
import HomePage from './pages/HomePage';
import Main from './pages/Main'
import './App.css'
import { useHistory } from 'react-router-dom'

export default function App() {
  const [user, setUser] = useState({ name: localStorage.getItem('user') })
  const [search, setSearch] = useState('')
  const history = useHistory()

  const handleSearch = e => {
    e.preventDefault()
    history.push('/main/'+search)
  }

  return (
    <div>
      <NaviBar user={user} setSearch={setSearch} handleSearch={handleSearch} />
      <Switch>
        <Route path="/" exact render={() => <HomePage user={user} setUser={setUser} />} />
        <Route path='/main' render={() => <Main user={user} />} />
      </Switch>
    </div>
  )
}