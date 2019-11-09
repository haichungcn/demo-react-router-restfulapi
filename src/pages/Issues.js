import React, { useEffect, useState } from 'react'
import IssueItem from '../components/IssueItem';
import { useParams, useHistory, useLocation } from 'react-router-dom';



export default function Issues() {
  const [issues, setIssues] = useState([])
  const owner = useParams()['repo']
  const repo = useParams()['issue']
  const history = useHistory()
  const location = useLocation()
  const token = localStorage.getItem('token')
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues`,{
      headers: new Headers({
        "Authorization" : `Token ${token}`
      })
    })
    const data = await res.json()
    if (res.ok)
      setIssues(data)
  }

  return (
    <div className="container">
      <button onClick={() => history.push(location.pathname + '/newissue')}>New issue</button><h5>results:</h5>
      {issues.map(el => <IssueItem key={el.id} issue={el} />)}
    </div>
  )
}
