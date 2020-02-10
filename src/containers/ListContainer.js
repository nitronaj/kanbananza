import {connect} from 'react-redux';
import List from '../components/List';



const mapStateToProps = (state, ownProps) => {
	return {
		list: state.lists.entities[ownProps.id]
	}
}

export const ListContainer = connect(mapStateToProps)(List);
