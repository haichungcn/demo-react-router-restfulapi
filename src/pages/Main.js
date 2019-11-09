import React, { useState } from 'react'
import { useHistory, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Issues from './Issues'
import Issue from './Issue'
import NewIssue from './NewIssue'

export default function Main(props) {
  const history = useHistory()
  const [singleUrl, setSingleUrl] = useState('')

  if (!props.user.name) history.push('/')
  return (
    <div>
      <Switch>
        <Route path='/main/:repo/:issue/newissue' component={NewIssue} />
        <Route exact path="/main/:repo/:issue/:number" component={() => <Issue url={singleUrl} />} />
        <Route path="/main/:repo/:issue" render={() => <Issues issues={props.issues} setSingleUrl={setSingleUrl} />} />
      </Switch>
    </div>
  )
}
