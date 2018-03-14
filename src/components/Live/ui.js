import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import LiveView from './live_view';

class ItemList extends Component {
	componentWillMount(){
		this.props.fetchItems();
	}

	render(){
		return (
			<LiveView itemsData = {this.props.items}/>
		);
	}
}

function mapStateToProps (state){
	debugger;
	return {
		items : state.items
	}
};

export default connect(mapStateToProps, actions)(ItemList);