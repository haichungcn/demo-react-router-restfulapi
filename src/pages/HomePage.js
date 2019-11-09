import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import {useHistory} from 'react-router-dom'



export default function HomePage(props) {
  const [input, setInput] = useState({})
  const history = useHistory()

  const handleOnChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInput({ ...input, [name]: value })
  }
  const handleSubmit = e => {

    e.preventDefault()
    props.setUser({ name: input.name })
    localStorage.setItem('user',input.name)
    history.push('/main')
  }
  if (props.user.name) history.push('/main')
  return (
    <div className="login-box">
      <Form onChange={(e) => handleOnChange(e)} onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter name" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
    </Button>
      </Form>
    </div>
  )
}
