import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


export default function Issue(props) {
  const [issue, setIssue] = useState({})
  const param = useParams()
  useEffect(() => {
    getData()
  })
  
  const getData = async () => {
    const res = await fetch(`https://api.github.com/repos/${param.repo}/${param.issue}/issues/${param.number}`)
    const data = await res.json()
    setIssue(data)
  }

  return (
    <div>
      {issue.title}
    </div>
  )
}
