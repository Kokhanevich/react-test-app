import React, {Component} from 'react';
import {Form, FormGroup, Input, Button} from "reactstrap";
import axios from 'axios'
import './App.css'

class App extends Component  {
  flag = false
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value  })
  }

  dialogFunction = e => {
    return (
        <dialog><h2>Message sent successful)</h2></dialog> )
  }


  async handleSubmit(e) {
    e.preventDefault();

    const { name, email, message} = this.state;

    await axios.post('/api/form', {
      name,
      email,
      message
    }).then(res => {
      if (res.data === 'Success') {
        alert("Message sent successful!!!")
        this.dialogFunction(e)
        window.location.reload()
      } else {
        alert("Error " + res.data)
      }
    })
  }

  render() {
    return (
        <div className="App">
        <Form onSubmit={this.handleSubmit} style={{width: '600px'}}>
          <h1>Get in touch</h1>
          <FormGroup>
            <Input
                type="text"
                name="name"
                onChange={this.handleChange}
                placeholder="Name"
                required
            />
          </FormGroup>

          <FormGroup>
            <Input
                type="email"
                name="email"
                onChange={this.handleChange}
                placeholder="Email"
                required
            />
          </FormGroup>

          <FormGroup>
            <Input
                type="textarea"
                name="message"
                onChange={this.handleChange}
                placeholder="Message"
                required
            />
          </FormGroup>
          <Button>Send</Button>
        </Form>
        </div>
    );
  }
}

export default App;
