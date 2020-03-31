import React, { useState } from 'react'
import clsx from 'clsx'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ToolTip from '@material-ui/core/ToolTip'
import IconButton from '@material-ui/core/IconButton'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Brightness4Rounded from '@material-ui/icons/Brightness4Rounded'
import Brightness6Rounded from '@material-ui/icons/Brightness6Rounded'
import Brightness7Rounded from '@material-ui/icons/Brightness7Rounded'
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded'
import PersonRoundedIcon from '@material-ui/icons/PersonRounded'
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded'
import MeetingRoomRoundedIcon from '@material-ui/icons/MeetingRoomRounded'
import LocalDiningIcon from '@material-ui/icons/LocalDining'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

function Copyright () {
  return (
    <Typography variant="body2" color="textPrimary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://stanjng.github.io/">
        {'See What Stan\'s Up To!'}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundImage: 'url(https://source.unsplash.com/featured/?food)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
     theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    opacity: '0.95'
  },
  fixedHeight: {
    height: '75vh'
  }
}))

const MainPage = props => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight)

  const unAuthOptions = (
    <List>
      <ListItem button component="a" href="#/sign-in">
        <ListItemIcon>
          <PersonRoundedIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Sign In" />
      </ListItem>
      <ListItem button component="a" href="#/sign-up">
        <ListItemIcon>
          <GroupAddRoundedIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Sign Up" />
      </ListItem>
    </List>
  )

  const authOptions = (
    <List>
      <ListItem button component="a" href="#/change-password">
        <ListItemIcon>
          <VpnKeyRoundedIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Change Password" />
      </ListItem>
      <ListItem button component="a" href="#/sign-out">
        <ListItemIcon>
          <MeetingRoomRoundedIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Sign Out" />
      </ListItem>
    </List>
  )

  return (
    <div className={classes.root}>
      <CssBaseline />

      { /* NavBar */ }
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Fork <LocalDiningIcon color="secondary" fontSize="large" />
          </Typography>
        </Toolbar>
      </AppBar>

      { /* Drawer */ }
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ToolTip disableHoverListener={!!props.user} placement="right" title="You must be signed in to access this feature.">
            <span>
              <ListItem button disabled={!props.user} component="a" href="#/breakfast">
                <ListItemIcon>
                  <Brightness7Rounded fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Breakfast" />
              </ListItem>
            </span>
          </ToolTip>
          <ToolTip disableHoverListener={!!props.user} placement="right" title="You must be signed in to access this feature.">
            <span>
              <ListItem button disabled={!props.user} component="a" href="#/lunch">
                <ListItemIcon>
                  <Brightness6Rounded fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Lunch" />
              </ListItem>
            </span>
          </ToolTip>
          <ToolTip disableHoverListener={!!props.user} placement="right" title="You must be signed in to access this feature.">
            <span>
              <ListItem button disabled={!props.user} component="a" href="#/dinner">
                <ListItemIcon>
                  <Brightness4Rounded fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Dinner" />
              </ListItem>
            </span>
          </ToolTip>
        </List>
        { console.log(props.user) }
        { props.user ? authOptions : unAuthOptions }
      </Drawer>

      { /* Main Content */ }
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper className={fixedHeightPaper}>
                {props.children}
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  )
}

export default MainPage
