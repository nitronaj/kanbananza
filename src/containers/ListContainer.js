import {connect} from 'react-redux';
import List from '../components/List';



const mapStateToProps = (state, ownProps) => {
	return {
		list: state.lists.entities[ownProps.listId],
	}
}

const mapDispatchToProps = dispatch => {
	return {
		removeList: listId => dispatch({
			type: 'REMOVE_LIST',
			payload: {
				listId
			}
		})
	}
}

export const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);
