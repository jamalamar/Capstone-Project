import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Route, Switch, Link } from "react-router-dom";
import LoginModal from '../Components/login-modal.js'
import MenuDrawer from '../Components/menu-drawer.js'
import Avatar from '../Components/avatar.js'


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import Icon from '@material-ui/core/Icon';



const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appBar: {
    background: theme.palette.common.black,
  },
  linkHome: {
    'text-decoration': 'inherit',
    color: 'inherit',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  linkShop: {
    'text-decoration': 'inherit',
    color: 'inherit',
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  }
});

class PrimarySearchAppBar extends Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <Icon>money</Icon>
            </Badge>
          </IconButton>
          <Link to='/shop' className={classes.linkShop}>Buy Tickets</Link>
        </MenuItem>
        
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          
            {this.props.logged ? 
              <IconButton 
                aria-owns={isMenuOpen ? 'material-appbar' : undefined} 
                aria-haspopup="true" 
                onClick={this.handleProfileMenuOpen} 
                color="inherit">
              {this.props.response.picture.data.url ? <Avatar response={this.props.response}/> : <AccountCircle />}
                </IconButton>
              : <LoginModal handleLogin={this.props.handleLogin}/>}
          
          {this.props.logged ? <p>Profile</p> : null}
        </MenuItem>
      </Menu>
    );

    return (
      
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>


            <MenuDrawer/>

            <Link to='/home' className={classes.linkHome}>
              <Typography className={classes.title} variant="h6" color="inherit" noWrap>Auction WS</Typography>
            </Link>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>

              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />

            </div>

            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>

            <div style={{paddingRight: '30px'}}>
            {this.props.logged ? <p>Hello, {this.props.response.name}!</p> : null}
            </div>

            <div style={{paddingRight: '30px'}}>
            {this.props.logged ? <p><Icon>flash_on</Icon>{this.props.tokens}</p> : null}
            </div>

              <Link to='/shop' className={classes.linkShop}>
              <IconButton color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <Icon>money</Icon>
                </Badge>
              </IconButton>
              </Link>
              
              <IconButton color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>

              {this.props.logged ? 
                <IconButton 
                  aria-owns={isMenuOpen ? 'material-appbar' : undefined} 
                  aria-haspopup="true" 
                  onClick={this.handleProfileMenuOpen} 
                  color="inherit">
                {this.props.response.picture.data.url ? <Avatar response={this.props.response}/> : <AccountCircle />}
                  </IconButton>
                : <LoginModal handleLogin={this.props.handleLogin}/>}
                                

            </div>

            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>

          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
        {this.props.children}
      </div>
      
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);

