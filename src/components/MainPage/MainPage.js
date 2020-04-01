import React, { useState } from 'react'
import clsx from 'clsx'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
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
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

const customTheme = createMuiTheme(
  {
    palette: {
      common: {
        black: 'rgba(0, 0, 0, 1)',
        white: '#fff'
      },
      background: {
        paper: 'rgba(237, 173, 18 , 1)',
        default: 'rgba(15, 15, 15, 1)'
      },
      primary: {
        light: 'rgba(246, 214, 135, 1)',
        main: 'rgba(240, 187, 64, 1)',
        dark: 'rgba(211, 155, 17, 1)',
        contrastText: 'rgba(78, 78, 78, 1)'
      },
      secondary: {
        light: 'rgba(246, 135, 167, 1)',
        main: 'rgba(240, 64, 115, 1)',
        dark: 'rgba(211, 17, 73, 1)',
        contrastText: 'rgba(255, 255, 255, 1)'
      },
      error: {
        light: 'rgba(246, 158, 135, 1)',
        main: 'rgba(240, 101, 64, 1)',
        dark: 'rgba(211, 57, 17, 1)',
        contrastText: 'rgba(255, 255, 255, 1)'
      },
      text: {
        primary: 'rgba(251,238,206, 1)',
        secondary: 'rgba(255, 255, 255, 1)',
        disabled: 'rgba(20, 20, 20, 0.8)',
        hint: 'rgba(0, 0, 0, 0.38)'
      }
    }
  }
)

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  root: {
    background: customTheme.palette.primary.main,
    display: 'flex'
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
    flexGrow: 1,
    fontFamily: '"Source Serif Pro, serif"',
    fontWeight: 500,
    fontSize: theme.typography.pxToRem(30)
  },
  drawerPaper: {
    color: customTheme.palette.primary.contrastText,
    background: customTheme.palette.primary.light,
    borderColor: customTheme.palette.primary.light,
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
    background: customTheme.palette.background.default,
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    opacity: '0.95'
  },
  fixedHeight: {
    height: '78vh'
  }
}))

function Copyright () {
  return (
    <Typography variant="body2" color="black" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://stanjng.github.io/">
        {'See What Stan\'s Up To!'}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

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
          <PersonRoundedIcon color="default" fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Sign In" />
      </ListItem>
      <ListItem button component="a" href="#/sign-up">
        <ListItemIcon>
          <GroupAddRoundedIcon color="default" fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Sign Up" />
      </ListItem>
    </List>
  )

  const authOptions = (
    <List>
      <ListItem button component="a" href="#/change-password">
        <ListItemIcon>
          <VpnKeyRoundedIcon color="default" fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Change Password" />
      </ListItem>
      <ListItem button component="a" href="#/sign-out">
        <ListItemIcon>
          <MeetingRoomRoundedIcon color="default" fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Sign Out" />
      </ListItem>
    </List>
  )

  return (
    <ThemeProvider theme={customTheme}>
      <div className={classes.root}>
        <CssBaseline />

        { /* NavBar */ }
        <AppBar position="absolute" elevation={0} border="0 0 1px 0" className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="secondary"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="secondary" align="right" noWrap className={classes.title}>
              Fork
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
            <IconButton color="secondary" onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <List>
            <ToolTip disableHoverListener={!!props.user} placement="right" title="You must be signed in to access this feature.">
              <span>
                <ListItem button disabled={!props.user} component="a" href="#/breakfast">
                  <ListItemIcon>
                    <Brightness7Rounded color="secondary" fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Breakfast" />
                </ListItem>
              </span>
            </ToolTip>
            <ToolTip disableHoverListener={!!props.user} placement="right" title="You must be signed in to access this feature.">
              <span>
                <ListItem button disabled={!props.user} component="a" href="#/lunch">
                  <ListItemIcon>
                    <Brightness6Rounded color="secondary" fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Lunch" />
                </ListItem>
              </span>
            </ToolTip>
            <ToolTip disableHoverListener={!!props.user} placement="right" title="You must be signed in to access this feature.">
              <span>
                <ListItem button disabled={!props.user} component="a" href="#/dinner">
                  <ListItemIcon>
                    <Brightness4Rounded color="secondary" fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Dinner" />
                </ListItem>
              </span>
            </ToolTip>
          </List>
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
            <Box mt={3}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default MainPage
