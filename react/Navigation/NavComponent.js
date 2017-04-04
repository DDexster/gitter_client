import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import Button from 'react-bootstrap/lib/Button';

import './style.css';


export default class NavComponent extends Component{
		constructor(props){
			super(props);
			this.state = {
			};
		}
	render(){
		const auth = this.props.authenicated;
		return(
			<nav>
				<Navbar>
					<Nav>
						<img src="./images/gitter-logo.svg" alt="Gitter Logo" />
					</Nav>
					<Navbar.Header>
						<Navbar.Brand>
							<span>Gitter Client</span>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav className="pull-right center">
						{auth ? (
							<p>Loggeg In</p>
						) : (
							<Button id="si-button">Sign In</Button>
						)}
					</Nav>
				</Navbar>
			</nav>
		);
	}
}
