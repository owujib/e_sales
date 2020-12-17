import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormControl, Button, FormGroup } from 'react-bootstrap';

import { register } from '../actions/userAction';

export class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.register(this.state);
  };

  render() {
    console.log(this.props);
    return (
      <div className="container mt-5">
        <h4 className="text-center text-secondary">Create an account</h4>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <FormControl
              value={this.state.firstname}
              onChange={this.handleChange}
              id="firstname"
              type="text"
              placeholder="firstname"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              id="lastname"
              onChange={this.handleChange}
              value={this.state.lastname}
              type="text"
              placeholder="lastname"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              onChange={this.handleChange}
              value={this.state.email}
              type="text"
              id="email"
              placeholder="email"
            />
          </FormGroup>
          <FormGroup>
            <FormControl
              onChange={this.handleChange}
              value={this.state.password}
              id="password"
              type="text"
              placeholder="password"
            />
          </FormGroup>
          <Button type="submit" variant="outline-primary">
            regitser
          </Button>
        </Form>
        {this.props.user.redirect && this.props.history.push('/login')}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { register })(Register);
