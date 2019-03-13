import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';


import ItemModal from './item-modal.js'
import CountDown from './countdown.js'





function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const styles = theme => ({
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper,
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    background: '#aeaeab', /* fallback for old browsers */
    background: '-webkit-linear-gradient(to top, #efefef, #ffffff)', /* Chrome 10-25, Safari 5.1-6 */
    background: 'linear-gradient(to top, #efefef, #ffffff)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            
  },
  cardMedia: {
    padding: '26%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
    height: '150px',
    'overflow': 'auto'
  },
    paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});



class Album extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false });
  };
  
  
render() {
  
const { classes } = this.props;

const cards = this.props.items;

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          {/* End hero unit */}
          <Grid container spacing={40}>
            {cards.map((item, index) => {
              
              return(
              
              <Grid item key={index} sm={6} md={4} lg={3}>
                
                <Card className={classes.card}>
                  
                  <CardMedia
                    className={classes.cardMedia}
                    image={item.item_img}
                    title={item.item_name}/>

                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">{item.item_short}</Typography>
                    <Typography>{item.item_name}</Typography>
                  </CardContent>

                  <CardActions>
                    <ItemModal>
                      <p style={getModalStyle()} className={classes.paper}>{item.item_name}</p>
                    </ItemModal>
                    <Button size="small" color="primary">Enter</Button>
                    <CountDown/>
                  </CardActions>
                
                </Card>


              </Grid>

            )})}

          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
};


const AlbumWrapped = withStyles(styles)(Album)

export default AlbumWrapped;


