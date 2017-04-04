import React, {Component} from 'react';
import NavComponent from './Navigation/NavComponent';

import './bootstrap.css';

export default class MainComponent extends Component{

	constructor(props){
		super(props);
		this.state = {
			authenicated: false
		};
	}

	render(){
		return (

			<NavComponent authenicated={this.state.authenicated} />

			);
	}
}
