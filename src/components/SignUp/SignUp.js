import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const SignUp = props => {
  const [regInfo, setRegInfo] = useState(
    {
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  )

  const handleChange = event => setRegInfo({
    ...regInfo,
    [event.target.name]: event.target.value
  })

  const onSignUp = event => {
    event.preventDefault()

    signUp(regInfo)
      .then(() => signIn(regInfo))
      .then(res => props.setUser(res.data.user))
      .then(() => props.alert({
        heading: 'Sign Up Success',
        message: messages.signUpSuccess,
        variant: 'success'
      }))
      .catch(error => {
        console.error(error)
        setRegInfo({ email: '', password: '', passwordConfirmation: '' })
        alert({
          heading: 'Sign Up Failed',
          message: messages.signUpFailure,
          variant: 'danger'
        })
      })
      .finally(() => props.history.push('/'))
  }

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Sign Up</h3>
        <form onSubmit={onSignUp} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={regInfo.email}
            onChange={handleChange}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={regInfo.password}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="passwordConfirmation"
            label="Confirm Password"
            type="password"
            id="passwordConfirmation"
            value={regInfo.passwordConfirmation}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  )
}

export default withRouter(SignUp)
