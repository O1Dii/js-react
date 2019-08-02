import React from 'react';

import './Header.scss';

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.openCloseAll = this.openCloseAll.bind(this);
  }

  openCloseAll() {
    const { close } = this.props;
    close();
  }

  render() {
    return (
      <div className="header">
        <i className="header__bars fas fa-bars" />
        <h2 className="header__title">Filters</h2>
        <button type="button" onClick={this.openCloseAll} className="header__exit fas fa-times" />
      </div>
    );
  }
}

export default Header;
