import { useHistory, useLocation } from 'react-router-dom'
import { makeStyles, Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Avatar } from "@material-ui/core"
import { Apps, Add, SubjectOutlined, EditAttributes, Mood, PermIdentity } from '@material-ui/icons'
import { format } from 'date-fns'

const drawerWidth = 240


const useStyles = makeStyles((theme) => {
  return {
    page: {
      width: '100%',
      padding: theme.spacing(2)
    },
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: "#f3d4e9"
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    title: {
      padding: theme.spacing(2)
    },
    date: {
      flexGrow: 1
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
      marginLeft: theme.spacing(2),
      width: 70
    }
  }

})

const Layout = ({ children }) => {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    {
      text: 'Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/'
    }, 
    {
      text: 'Create Notes',
      icon: <PermIdentity color="secondary" />,
      path: '/Form'
    },
    {
      text: 'Typography',
      icon: <Add color="secondary" />,
      path: '/Typography'
    },
    {
      text: 'Button',
      icon: <EditAttributes color="secondary" />,
      path: '/Button'
    },
    {
      text: 'Icon',
      icon: <Mood color="secondary" />,
      path: '/Icon'
    },
    {
      text: 'Grid',
      icon: <Apps color="secondary" />,
      path: '/Grid'
    },
  ];

  return (
    <>
      <div className={classes.root}>
        {/* app bar */}
        <AppBar
          position="fixed"
          className={classes.appBar}
          elevation={0}
          color="primary"
        >
          <Toolbar>
            <Typography className={classes.date}>
              Today is the {format(new Date(), 'do MMMM Y')}
            </Typography>
            <Typography>Material UI</Typography>
            <Avatar className={classes.avatar} src="/logo.png" />
          </Toolbar>
        </AppBar>

        {/* side drawer */}
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{ paper: classes.drawerPaper }}
          anchor="left"
        >
          <div>
            <Typography variant="h5" className={classes.title}>
              Material UI
            </Typography>
          </div>

          {/* links/list section */}
          {/* <List>
          <ListItem>
            <ListItemText primary="Home"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Services"/>
          </ListItem>
         */}
          <List>
            {menuItems.map((item) => (
              <ListItem divider
                button
                key={item.text}
                onClick={() => history.push(item.path)}
                className={location.pathname === item.path ? classes.active : null}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>

        </Drawer>

        {/* main content */}
        <div className={classes.page}>
          <div className={classes.toolbar}></div>
          {children}
        </div>
      </div>
    </>
  )
}
export default Layout;