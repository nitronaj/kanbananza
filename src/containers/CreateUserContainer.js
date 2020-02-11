import {connect} from 'react-redux';

import CreateUser from '../components/CreateUser';
import { createUser } from '../actions/user-actions';

const mapDispatchToProps = {
	createUser
}

export const CreateUserContainer = connect(null, mapDispatchToProps)(CreateUser);
