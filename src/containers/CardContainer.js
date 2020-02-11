import { connect } from 'react-redux';
import Card from '../components/Card';
import { removeCard } from '../actions/card-actions';

const mapStateToProps = (state, ownProps) => {
  return {
    card: state.cards.entities[ownProps.cardId],
  };
};
const mapDispatchToProps = { removeCard };

export const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);
