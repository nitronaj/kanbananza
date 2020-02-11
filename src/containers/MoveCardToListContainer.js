import {connect } from 'react-redux';
import MoveCardToList from '../components/MoveCardToList';
import { moveCardToList } from '../actions/list-actions';



const mapStateToProps = (state, ownProps) => {
	return {
		lists: Object.values(state.lists.entities)
	}
}

const mapDispatchToProp = (dispatch, ownProps) => {
	return {
		moveCardToList(event) {
			const destinationListId = event.target.value;
			dispatch(moveCardToList(ownProps.cardId, ownProps.listId, destinationListId));
		}

	}
}

export const MoveCardToListContainer = connect(mapStateToProps, mapDispatchToProp)(MoveCardToList);
