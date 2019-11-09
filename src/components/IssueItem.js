import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

export default function IssueItem(props) {
  const history = useHistory() ;
  let location = useLocation();
  const { title, body, number, url } = props.issue
  return (
    <div className="issue-item">
      <h5 className="issue-title" onClick={() => {
        console.log('object', url)
        history.push(`${location.pathname}/${number}`)
      }}>#{number} - {title}</h5>
      <p>{body.slice(0, 100)}</p>
    </div>
  )
}
