import React, {Component} from 'react';

var cardStyle = {
	height : "232px",
	width : "100%"
}
var imageStyle = {
}

var cardContainer = {
	width : "400px",
	margin : "0 15px"
}

export default class Card extends Component{
	render(){
		debugger;
		return (
			<div className = "slick-slide slick-cloned" style = {cardContainer}>
				<div className = "card card-block" style = {cardStyle}>
					<img id = "liveImage" src = {"http://placekitten.com/g/400/200"} alt = "LOGO"/>	
				</div>
			</div>
			
		);
	}
}
