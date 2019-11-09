import React, { useState } from 'react'
import { useParams, useHistory, useLocation } from 'react-router-dom'

export default function NewIssue() {
  const history = useHistory()
  const location =  useLocation()
  const [input, setInput] = useState({})
  const params = useParams()
  const token = localStorage.getItem('token')
  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const handleNewIssue = async e => {
    e.preventDefault()
    if (input.body && input.title) {
      const body = {
        title: input.title,
        body: input.body
      }
      console.log(body)
      const resp = await fetch(`https://api.github.com/repos/${params.repo}/${params.issue}/issues`, {
        method: 'POST',
        headers: new Headers({
          'Authorization': `Token ${token}`,
          'Content-type': 'application/json'
        }),
        body: JSON.stringify(body)
      })
      const response = await resp.json()
      if (resp.ok) {
        console.log(response)
        history.push(location.pathname.split('newissue')[0]+response.number)
      }
      else console.log('error')
    }
  }

  return (
    <div>
      <form onChange={(e) => handleChange(e)} onSubmit={e => handleNewIssue(e)}>
        <label>Title</label>
        <input name="title" />
        <br />
        <label>Body</label>
        <input name="body" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
