import { connect } from 'react-redux';
import CreateCard from '../components/CreateCard';
import { createCard } from '../actions/card-actions';

const mapDispatchToProps = {
  createCard,
};

export const CreateCardContainer = connect(null, mapDispatchToProps)(CreateCard);
