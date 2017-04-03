import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';

import './style.css';


export default class NavComponent extends Component{

	render(){
		return(
			<div>
				<Navbar>
					<Navbar.Header>
							<Navbar.Brand>
								<img src="" alt="Gitter logo" />
								<span>Gitter Client</span>
							</Navbar.Brand>

					</Navbar.Header>
				</Navbar>
			</div>
		);
	}
}
