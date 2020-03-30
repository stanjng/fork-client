import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import ChooseMeal from '../ChooseMeal/ChooseMeal.js'
// import apiUrl from '../../apiConfig'
import {
  Grid
} from '@material-ui/core'
// import axios from 'axios'

function TabPanel (props) {
  const { children, value, index, user, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box container="true" p={2}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
}

function a11yProps (index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100vh'
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.paper
  }
}))

const MainPage = props => {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="NavBar"
        className={classes.tabs}
      >
        <Tab label="My Profile" {...a11yProps(0)} />
        <Tab label="Breakfast" {...a11yProps(1)} />
        <Tab label="Lunch" {...a11yProps(2)} />
        <Tab label="Dinner" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        My Profile
        {props.auth}
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <ChooseMeal mealtype="breakfast" meal="Breakfast" user={props.user} alert={props.alert} />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <ChooseMeal mealtype="lunch" meal="Lunch" user={props.user} alert={props.alert} />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <ChooseMeal mealtype="dinner" meal="Dinner" user={props.user} alert={props.alert} />
        </Grid>
      </TabPanel>
    </div>
  )
}

export default MainPage
