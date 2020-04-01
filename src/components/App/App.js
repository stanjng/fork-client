import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import AuthenticatedRoute from '../AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../AutoDismissAlert/AutoDismissAlert'
import MainPage from '../MainPage/MainPage'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import SignOut from '../SignOut/SignOut'
import ChangePassword from '../ChangePassword/ChangePassword'
import ChooseMeal from '../ChooseMeal/ChooseMeal.js'
import Grid from '@material-ui/core/Grid'
import SplashPage from '../SplashPage/SplashPage'
import 'typeface-roboto'

const App = props => {
  const [alerts, setAlerts] = useState([])
  const [user, setUser] = useState(null)

  const alert = ({ heading, message, variant }) => {
    setAlerts([...alerts, { heading, message, variant }])
  }

  return (
    <MainPage
      user={user}
    >
      {/* ROUTES */}
      {alerts.map((alert, index) => (
        <AutoDismissAlert
          key={index}
          heading={alert.heading}
          variant={alert.variant}
          message={alert.message}
        />
      ))}
      <Route exact path='/' render={() => (
        <Grid
          container
          item
          xs={12}
          color="primary"
        >
          <SplashPage setUser={setUser} />
        </Grid>
      )} />
      <Route path='/sign-up' render={() => (
        <SignUp alert={alert} setUser={setUser} />
      )} />
      <Route path='/sign-in' render={() => (
        <SignIn alert={alert} setUser={setUser} />
      )} />
      <AuthenticatedRoute user={user} path='/sign-out' render={() => (
        <SignOut alert={alert} clearUser={setUser} user={user} />
      )} />
      <AuthenticatedRoute user={user} path='/change-password' render={() => (
        <ChangePassword alert={alert} user={user} />
      )} />
      <AuthenticatedRoute user={user} exact path='/breakfast' render={() => (
        <ChooseMeal mealtype="breakfast" meal="Breakfast" user={user} alert={alert} />
      )} />
      <AuthenticatedRoute user={user} exact path='/lunch' render={() => (
        <ChooseMeal mealtype="lunch" meal="Lunch" user={user} alert={alert} />
      )} />
      <AuthenticatedRoute user={user} exact path='/dinner' render={() => (
        <ChooseMeal mealtype="dinner" meal="Dinner" user={user} alert={alert} />
      )} />
    </MainPage>
  )
}

export default App
