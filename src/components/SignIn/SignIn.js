import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../AutoDismissAlert/messages'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const SignIn = props => {
  const [loginInfo, setLoginInfo] = useState(
    {
      email: '',
      password: ''
    }
  )

  const handleChange = event => {
    setLoginInfo(
      {
        ...loginInfo,
        [event.target.name]: event.target.value
      }
    )
  }

  const onSignIn = event => {
    event.preventDefault()

    signIn(loginInfo)
      .then(res => props.setUser(res.data.user))
      .then(() => props.alert({
        heading: 'Sign In Success',
        message: messages.signInSuccess,
        variant: 'success'
      }))
      .catch(error => {
        console.error(error)
        setLoginInfo({ email: '', password: '' })
        props.alert({
          heading: 'Sign In Failed',
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
      .finally(() => props.history.push('/'))
  }

  return (
    <div className="row">
      <div className="col-sm-10 col-md-8 mx-auto mt-5">
        <h3>Sign In</h3>
        <form onSubmit={onSignIn} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={loginInfo.email}
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
            value={loginInfo.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  )
}

export default withRouter(SignIn)
