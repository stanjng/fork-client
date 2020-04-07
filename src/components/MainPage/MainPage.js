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
import Button from '@material-ui/core/Button'
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
        default: 'rgba(224, 225, 218, .96)'
      },
      primary: {
        light: '#ffedb3',
        main: '#ffd54d',
        dark: '#e6b100',
        contrastText: 'rgba(78, 78, 78, 1)'
      },
      secondary: {
        light: 'lighten( rgba(220, 66, 80, 1), 20% )',
        main: 'rgba(220, 66, 80, 1)',
        dark: 'darken(rgba(220, 66, 80, 1), 20%)',
        contrastText: 'rgba(255, 255, 255, 1)'
      },
      accent: {
        light: 'lighten( rgba(19, 81, 169, 1), 20% )',
        main: 'rgba(19, 81, 169, 1)',
        dark: 'darken( rgba(19, 81, 169, 1), 20% )',
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

const drawerWidth = 200

const useStyles = makeStyles(theme => ({
  root: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
    borderBottom: `2px solid ${customTheme.palette.primary.light}`,
    background: 'transparent',
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
  hide: {
    display: 'none'
  },
  title: {
    flexGrow: 1,
    fontFamily: '"Baskerville, serif"',
    fontWeight: 500,
    fontSize: theme.typography.pxToRem(30),
    color: customTheme.palette.primary.main
  },
  drawerPaper: {
    color: customTheme.palette.secondary.contrastText,
    background: customTheme.palette.secondary.main,
    borderColor: customTheme.palette.secondary.main,
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
    display: 'none',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
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
    flexDirection: 'row',
    borderRadius: '25%',
    alignItems: 'center'
  },
  paperHeight: {
    display: 'flex',
    alignItems: 'baseline',
    minHeight: '78vh',
    maxHeight: '78vh',
    paddingTop: '7rem',
    // background: 'transparent'
    background: 'transparent'
  },
  circleCards: {
    maxHeight: '50vh',
    maxWidth: '50vh',
    minHeight: '50vh',
    minWidth: '50vh'
  },
  forkIcon: {
    padding: '.3rem',
    width: '4rem'
  },
  icons: {
    color: customTheme.palette.primary.light
  },
  splashText: {
    fontFamily: '"Baskerville, serif"',
    fontSize: '7rem',
    lineHeight: '1',
    letterSpacing: '-0.5rem'
  },
  enter: {
    fontSize: '2rem',
    padding: '1rem'
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
  const fixedHeightPaper = clsx(classes.paper, classes.circleCards)

  const unAuthOptions = (
    <List>
      <ListItem button component="a" href="#/sign-in">
        <ListItemIcon>
          <PersonRoundedIcon className={classes.icons} fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Sign In" />
      </ListItem>
      <ListItem button component="a" href="#/sign-up">
        <ListItemIcon>
          <GroupAddRoundedIcon className={classes.icons} fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Sign Up" />
      </ListItem>
    </List>
  )

  const unAuthPage = (
    <Grid container className={classes.paperHeight} spacing={2}>
      <Grid item md={10}>
        <Typography className={classes.splashText}>
          hate meal prep? same.
        </Typography>
        <Typography className={classes.splashText}>
          just <span style={{
            color: customTheme.palette.primary.main
          }}>Fork</span> it!
        </Typography>
      </Grid>
      <Button
        variant="contained"
        color="primary"
        href={
          props.user ? '#/main' : '#/sign-in'
        }>
      Go inside!
      </Button>
    </Grid>
  )

  const authOptions = (
    <List>
      <ListItem button component="a" href="#/change-password">
        <ListItemIcon>
          <VpnKeyRoundedIcon className={classes.icons} fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Change Password" />
      </ListItem>
      <ListItem button component="a" href="#/sign-out">
        <ListItemIcon>
          <MeetingRoomRoundedIcon className={classes.icons} fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Sign Out" />
      </ListItem>
    </List>
  )

  const authPage = (
    <Grid container className={classes.paperHeight} spacing={2}>
      <Grid item md={4}>
        <Paper className={fixedHeightPaper}>
          {props.children}
        </Paper>
      </Grid>
      <Grid item md={4}>
        <Paper className={fixedHeightPaper}>
          {props.children}
        </Paper>
      </Grid>
      <Grid item md={4}>
        <Paper className={fixedHeightPaper}>
          {props.children}
        </Paper>
      </Grid>
    </Grid>
  )

  const bgUrl = props.user ? '/splash.png' : '/welcome.png'

  return (
    <ThemeProvider theme={customTheme}>
      <div className={classes.root} style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + bgUrl})`
      }}>
        <CssBaseline />

        { /* NavBar */ }
        <AppBar position="absolute" elevation={0} className={clsx(classes.appBar, open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(classes.menuButton, classes.icons, open && classes.menuButtonHidden)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Typography component="h1" variant="h6" color="secondary" align="right" noWrap className={classes.title}>
              <img className={clsx(classes.forkIcon)} src={process.env.PUBLIC_URL + '/fork-icon.png'}/>
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
            <IconButton className={classes.icons} onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <List>
            <ToolTip disableHoverListener={!!props.user} placement="right" title="You must be signed in to access this feature.">
              <span>
                <ListItem button disabled={!props.user} component="a" href="#/breakfast">
                  <ListItemIcon>
                    <Brightness7Rounded className={classes.icons} fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Breakfast" />
                </ListItem>
              </span>
            </ToolTip>
            <ToolTip disableHoverListener={!!props.user} placement="right" title="You must be signed in to access this feature.">
              <span>
                <ListItem button disabled={!props.user} component="a" href="#/lunch">
                  <ListItemIcon>
                    <Brightness6Rounded className={classes.icons} fontSize="large" />
                  </ListItemIcon>
                  <ListItemText primary="Lunch" />
                </ListItem>
              </span>
            </ToolTip>
            <ToolTip disableHoverListener={!!props.user} placement="right" title="You must be signed in to access this feature.">
              <span>
                <ListItem button disabled={!props.user} component="a" href="#/dinner">
                  <ListItemIcon>
                    <Brightness4Rounded className={classes.icons} fontSize="large" />
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
            { props.user ? authPage : unAuthPage}
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
