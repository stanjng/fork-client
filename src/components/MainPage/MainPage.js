import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import MealPlan from '../MealPlan/MealPlan.js'
import {
  Grid
} from '@material-ui/core'

function TabPanel (props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
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

export default function VerticalTabs () {
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
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="My Profile" {...a11yProps(0)} />
        <Tab label="Breakfast" {...a11yProps(1)} />
        <Tab label="Lunch" {...a11yProps(2)} />
        <Tab label="Dinner" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        My Profile
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <MealPlan mealtype="breakfast" meal="Breakfast" />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <MealPlan mealtype="lunch" meal="Lunch" />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
        >
          <MealPlan mealtype="dinner" meal="Dinner" />
        </Grid>
      </TabPanel>
    </div>
  )
}
