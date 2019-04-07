import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavList from './navlist';
import NavButton from './navbutton';

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      isNavActive: false,
    };
  }

  toggleNav = () => {
    this.setState({ isNavActive: !this.state.isNavActive });
  };

  render() {
    const { isNavActive } = this.state;
    return (
      <Grid
        container
        className="navGrid"
        direction="row"
        justify="flex-end"
        alignItems="flex-start"
      >
        <NavList isNavActive={isNavActive} />
        <NavButton
          onNavButtonClick={this.toggleNav}
          isNavActive={isNavActive}
        />
      </Grid>
    );
  }
}

/* TODO -_- React.component threw a bug that took me forever to figure out... */
