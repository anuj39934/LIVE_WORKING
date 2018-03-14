import React, { Component } from 'react';
import ItemTemplate from './item_template';
import Slider from 'react-slick';

var containerStyle = {
	width : "100%",
	display :"flex",
	flexDirection : "row",
	listStyleType : "none",
	margin : "10px"
}

var listStyle = {
	display :"flex",
	flexDirection : "row",
	listStyleType : "none"
}

var listItemStyle = {
	height : "200px",
	border : "2px solid",
	minWidth : "200px",
	backgroundColor : "green"
}
var rowStyle = {
	display : "flex"
}
var genreClass = {
	fontWeight : "bold",
	color : "white",
	fontSize : "25px"
}

export default class ListRow extends Component {
	render(){
		var settings = {
			dots : false,
			infinite :true,
			speed : 500,
			centerPadding : "0px",
			centerMode : true,
			initialSlide : 0,
			focusOnSelect : true,
			draggable : true,
			responsive : [
				{
					breakpoint : 768,
					settings : {
						dots : false,
						arrow : true,
						infinite : true,
						slidesToShow : 1,
						SlideToScroll : 1
					}
				},
				{
					breakpoint : 1024,
					settings : {
						dots : false,
						arrow : true,
						infinite : true,
						slidesToShow : 3,
						SlideToScroll : 3
					}
				},
				{
					breakpoint : 10000,
					settings : {
						dots : false,
						arrow : true,
						infinite : true,
						slidesToShow : 4,
						SlideToScroll : 4
					}
				}
			]
		}

		if(this.props.data){
			debugger;
			var genre = "";
			var items = this.props.data[0].map(function(item, key){
				debugger;
				genre = item.genre;
				return (
						<ItemTemplate key={key} title={item.title} url = {item.url} genre = {item.genre}/>
				);
			});
		}else {
			var items = '';
		}
		debugger;
		return (
			<div className = "container">
				<p style = {genreClass}>{genre}</p>
				<Slider {...settings}>
					{items}
				</Slider>
			</div>
		);
	}
}