import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class ItemModal extends Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
	

	render(){	
		
		return(
			<div>
			<Button size="small" color="primary" onClick={this.handleOpen}>View</Button>
	        <Modal
	          aria-labelledby="simple-modal-title"
	          aria-describedby="simple-modal-description"
	          open={this.state.open}
	          onClose={this.handleClose}
	          >	
	          	
	          		{this.props.children}

	        </Modal>
	   </div>
		)
	}	
}


export default ItemModal;



