import {connect} from 'react-redux';
import CreateList from '../components/CreateList';


const defaultListData = {
  title: '',
  cards: []
}

const mapDispatchToProps = dispatch => {
  return {
    createList: listData => {
      const listId = Date.now().toString();
      const list = {
        id: listId,
        ...defaultListData,
        ...listData,
      }

      dispatch({
        type: 'LIST_CREATE',
        payload: {
          list,
          listId
        }
      })
    }
  }
}


export const CreatListContainer = connect(null, mapDispatchToProps)(CreateList);
