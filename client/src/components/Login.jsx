import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormControl, Button, FormGroup } from 'react-bootstrap';

import { login } from '../actions/userAction';

export class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };
  render() {
    console.log(this.props);
    return (
      <div className="container mt-5">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <FormControl
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
              type="text"
              placeholder="email"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="text"
              placeholder="password"
            />
          </FormGroup>
          <Button type="submit" variant="outline-primary">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateProps = (state) => ({
  user: state.user,
  err: state.err,
});

export default connect(mapStateProps, { login })(Login);
