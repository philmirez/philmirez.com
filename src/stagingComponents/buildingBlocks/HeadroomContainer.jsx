import React, { PureComponent } from 'react'
import { Link } from 'gatsby'
import Logo from 'atoms/logo/logo'
import Headroom from 'react-headroom'
import Grid from '@material-ui/core/Grid'
import { theme } from 'core/theme'

const headroom = {
  width: '100%',
  margin: '0px auto',
  padding: '1em 2em',
  boxShadow: '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
  zIndex: '20',
  backgroundColor: `${theme.color.black.primary}`
}

export default class HeadroomContainer extends PureComponent {
  render () {
    return (
      <Headroom style={headroom}>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='flex-start'
        >
          <Grid
            item
            xs={2}
          >
            <Logo />
          </Grid>
          <Grid
            item
            xs={10}
          >
            <Grid
              container
              direction='row'
              justify='flex-end'
              >
              <Link to={this.props.link.url}>
                {this.props.link.title}
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Headroom>
    )
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
