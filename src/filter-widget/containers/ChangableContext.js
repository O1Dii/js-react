import { connect } from 'react-redux';

import { toggleContext } from '../actions/index.js';
import Contexts from '../components/Contexts/Contexts';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  onContextChecked: (id) => {
    dispatch(toggleContext(id));
  },
});

const ChangableContext = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contexts);

export default ChangableContext;
