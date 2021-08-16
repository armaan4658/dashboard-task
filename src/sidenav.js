import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import SpeedIcon from '@material-ui/icons/Speed';
import SettingsIcon from '@material-ui/icons/Settings';
import BuildIcon from '@material-ui/icons/Build';
import FolderIcon from '@material-ui/icons/Folder';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import TableChartOutlinedIcon from '@material-ui/icons/TableChartOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailIcon from '@material-ui/icons/Mail';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import {MainContent} from './mainContent';
import {Charts} from './charts';
import { Menu, MenuItem } from '@material-ui/core';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems:'center',
    padding:'0',
    '& > *': {
      // margin: theme.spacing(1),
      // width: '25ch',
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    background:'none',
    color:'black',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor:'#4e73df',
    color:'white',
  },
  drawerClose: {
    // minWidth:'100px',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
    backgroundColor:'#4e73df',
    color:'white',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    display:'grid',
  },
}));

export function SideNav() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    // setOpen(true);
    open === true ? setOpen(false) : setOpen(true)
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
    <div className={classes.root} >
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
      </AppBar>
      
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        id="windowSideBar"
      >
        {/* <div className={classes.toolbar}>
          
        </div> */}
        {/* <Divider /> */}
        
          {open === true ? (
            <List>
            <ListItem className="navOpen"> <SentimentVerySatisfiedIcon /> <h2>SB Admin <sup>2</sup></h2> </ListItem>
            <Divider/>
            <ListItem className="navOpen">  <SpeedIcon /> <h4>Dashboard</h4> </ListItem>
            <ListItem className="navOpen">  <SettingsIcon /><h4 className="grey">Components</h4>  </ListItem>
            <ListItem className="navOpen">  <BuildIcon /><h4 className="grey">Utilities</h4>  </ListItem>
            <Divider />
            <ListItem className="navOpen">  <FolderIcon /><h4 className="grey">Pages</h4>  </ListItem>
            <ListItem className="navOpen">  <InsertChartIcon /><h4 className="grey">Charts</h4>  </ListItem>
            <ListItem className="navOpen">  <TableChartOutlinedIcon /><h4 className="grey">Tables</h4>  </ListItem>
            </List>
          ) : (
            window.innerWidth > 450 ? <PcSideNav /> : ""
            
          )}
        <div style={{display:'flex',justifyContent:'center'}}>
          {open === true ? (<button onClick={handleDrawerOpen}
          style={{background:'rgba(255,255,255,.2)',width: '2.5rem',
          height: '2.5rem',textAlign: 'center',marginBottom: '1rem',
          cursor: 'pointer',border:'none',borderRadius:'50%',color:'white'}}><ArrowBackIosIcon /></button>)  : (<button 
            onClick={handleDrawerOpen}
            style={{background:'rgba(255,255,255,.2)',width: '2.5rem',
            height: '2.5rem',textAlign: 'center',marginBottom: '1rem',
            cursor: 'pointer',border:'none',borderRadius:'50%',color:'white'}}><ArrowForwardIosIcon /></button>) }
        </div>
      </Drawer>
        <div style={{display:'flex',flexFlow:'column'}}>
          <Grid className="middle">
            <Grid item sm={4} md={4} lg={4} xl={4}>
              {window.innerWidth < 450 ? (<button id="mobileSearch"><SearchIcon fontSize="medium"/></button>
              ): (
                <form  noValidate autoComplete="off" className="searchBox">
                  <TextField id="outlined-basic" label="search for..." size="small" variant="outlined" fullWidth="true"/>
                  <button><SearchIcon fontSize="medium"/></button>
                </form>
              )}
                
            </Grid>
            <Grid item sm={8} md={8} lg={8} xl={8} 
            style={{display:'flex',gap:'10px',
            justifyContent:'flex-end',alignItems:'center'}}>
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <NotificationsIcon />
                </Badge>
                <span className="topbar-divider"></span>
                <div onClick={handleClick} style={{display:'flex',placeItems:'center',cursor:'pointer'}}>
                    
                <h6>Douglas Mcgeee</h6>
                <Avatar>H</Avatar>
                </div>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>

            </Grid>
          </Grid>
          <MainContent />
          <Charts />
        </div>
        
    </div>
    
    </>
  );
}

function PcSideNav() {
  return <List>
    <div className="navClose"> <button><SentimentVerySatisfiedIcon fontSize="large" /></button>  <h6>SB Admin <sup>2</sup></h6>  </div>
    {/* <Divider/> */}
    <div className="navClose"> <button><SpeedIcon /></button>  <h6>Dashboard</h6>  </div>
    <div className="navClose"> <button><SettingsIcon /></button>  <h6 className="grey">Components</h6>  </div>
    <div className="navClose"> <button><BuildIcon /></button>  <h6 className="grey">Utilities</h6>  </div>
    <Divider />
    <div className="navClose"> <button><FolderIcon /></button>  <h6 className="grey">Pages</h6>  </div>
    <div className="navClose"> <button><InsertChartIcon /></button>  <h6 className="grey">Charts</h6>  </div>
    <div className="navClose"> <button><TableChartOutlinedIcon /></button>  <h6 className="grey">Tables</h6>  </div>
  </List>;
}
