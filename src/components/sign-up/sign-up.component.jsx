import React from 'react'

import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss'

class SignUp extends React.Component {
  constructor() {
    super()

    this.state = {
      confirmPassword: '',
      displayName: '',
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = async event => {
    event.preventDefault()

    const { confirmPassword, displayName, email, password } = this.state

    if (password !== confirmPassword) {
      alert('passwords don\'t match')
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)

      await createUserProfileDocument(user, { displayName })
      this.setState({ confirmPassword: '', displayName: '', email: '', password: '' })
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { confirmPassword, displayName, email, password } = this.state

    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            label="Display Name"
            name="displayName"
            onChange={this.handleChange}
            required
            type='text'
            value={displayName}
          />
          <FormInput
            label="Email"
            name="email"
            onChange={this.handleChange}
            required
            type='email'
            value={email}
          />
          <FormInput
            label="Password"
            name="password"
            onChange={this.handleChange}
            required
            type='password'
            value={password}
          />
          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            onChange={this.handleChange}
            required
            type='password'
            value={confirmPassword}
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp
