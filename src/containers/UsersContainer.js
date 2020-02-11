import {connect } from 'react-redux';
import Users from '../components/Users';

const mapStateToProps = state => {
	return {
		users: state.users.ids
	}
}

export const UsersContainer = connect(mapStateToProps)(Users);
