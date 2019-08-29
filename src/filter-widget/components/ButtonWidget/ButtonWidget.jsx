import React from 'react';
import Draggable from 'react-draggable';
import PropTypes from 'prop-types';

import ActiveFilters from '../../containers/ActiveFilters';

import './ButtonWidget.scss';

class ButtonWidget extends React.PureComponent {
  render() {
    const { onClick } = this.props;

    return (
      <div className="open-button">
        <button onClick={onClick} type="button" className="open-button__button">
          Open/Close
        </button>

        <div>
          <ActiveFilters className="open-button__filters" />
        </div>
      </div>
    );
  }
}

ButtonWidget.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonWidget;
