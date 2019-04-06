import React from "react";
import Logo from "atoms/logo/logo";
import Nav from "./nav/nav";
import Headroom from "react-headroom";
import { headroom } from "./style";
import Grid from "@material-ui/core/Grid";

export default class Header extends React.Component {
  render() {
    return (
      <Headroom style={headroom}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <Grid item xs={2}>
            <Logo />
          </Grid>
          <Grid item xs={10}>
            <Nav />
          </Grid>
        </Grid>
      </Headroom>
    );
  }
}

// Sources:
// - https://dev.to/emmawedekind/reading-data-from-a-json-file-with-gatsby--graphql-58a2
// - https://www.gatsbyjs.org/docs/static-query/
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
// - https://labs.voronianski.com/oceanic-next-color-scheme/
// - https://www.narative.co/
// - https://codeburst.io/animating-react-components-with-css-and-styled-components-cc5a0585f105

// Sources
// - https://codepen.io/anon/pen/jdgNxZ?editors=1100
// - https://dev.to/emmawedekind/reading-data-from-a-json-file-with-gatsby--graphql-58a2
// - https://www.gatsbyjs.org/docs/static-query/
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
// - https://labs.voronianski.com/oceanic-next-color-scheme/
// - https://www.narative.co/
