import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid'
import { theme } from 'core/theme'

export default class Header extends PureComponent {
  render () {
    return (
      <div style={{
        position: 'absolute',
        top: '20%',
        zIndex: '5'
      }}>
      <div style={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Grid
          container
          direction='row'
          justify='space-between'
          alignItems='flex-end'
          style={{
            width: '50vw'
          }}
        >
          <Grid
            item
            xs={12}
            md={12}
            lg={3}
            style={{
              backgroundColor: theme.color.darkGray.primary,
              boxShadow: '0px 2px 4px rgba(0,0,0,0.18)'
            }}
          >
            <Grid
              container
              direction={'column'}
              justify='space-around'
              alignItems='center'
              >
              <Grid item xs={6}>
                <div style={{ margin: '0 0 3em 0' }}>
                </div>
                <div>
                <img style={{ width:'120px', borderRadius: '100px', border: `2px solid ${theme.color.white.primary}`,
                  boxShadow: '0px 2px 4px rgba(0,0,0,0.18)' }} src='https://lh3.googleusercontent.com/-Y0KSSPzajYA/XKqmmQerRKI/AAAAAAAAAAs/6kHIvHPgrUMqcDQx_Ymod_rylpJyrvHBwCEwYBhgL/w280-h280-p/me.jpeg' />
                </div>
              </Grid>
              <Grid item xs={10}>
                <h1>
                  Phil Ramirez
                </h1>
              </Grid>
              <Grid item xs={10}>
                <p>
                  Software Engineer based in the Washington D.C. metro area.
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={3}
            style={{
              backgroundColor: theme.color.darkGray.primary,
              boxShadow: '0px 2px 4px rgba(0,0,0,0.18)'
            }}
          >
            <Grid
              container
              direction={'column'}
              justify='flex-start'
              alignItems='center'
            >
              <Grid item xs={10}>
                <h5>
                  Social
                </h5>
              </Grid>
              <Grid item xs={10}>
                <p>
                  <a href={'https://linkedin.com/in/philmirez'} target='_blank'>
                    LinkedIn
                  </a>
                </p>
              </Grid>
              <Grid item xs={10}>
                <p>
                  <a href={'https://twitter.com/philmirez'} target='_blank'>
                    Twitter
                  </a>
                </p>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={3}
            style={{
              backgroundColor: theme.color.darkGray.primary,
              boxShadow: '0px 2px 4px rgba(0,0,0,0.18)'
            }}
          >
            <Grid
              container
              direction={'column'}
              justify='flex-start'
              alignItems='center'
            >
              <Grid item xs={10}>
                <h5>
                  Portfolio
                </h5>
              </Grid>
              <Grid item xs={10}>
                <p>
                  <a href={'https://cryptwalk.com'} target='_blank'>
                    CryptWalk
                  </a>
                </p>
              </Grid>
              <Grid item xs={10}>
                <p>
                  <a href={'https://github.com/philmirez'} target='_blank'>
                    Github
                  </a>
                </p>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      </div>
    )
  }
}