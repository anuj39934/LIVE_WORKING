import React , {Component} from 'react';
import ListRow from '../list/ListRow';
/*Here getting all data*/
export default class LiveView extends Component{
	render(){
			if(this.props.itemsData){
				var genreViews = this.props.itemsData.map(function(genreData, i){
					/*Inserting genre based data*/
					return (
							<ListRow key = {i} data = {Object.values(genreData)} />
						);
				})
			}else {
				var genreViews = '';
			}
			return (
					<div className = "live-view">
						{genreViews}
					</div>
				)
		}
}