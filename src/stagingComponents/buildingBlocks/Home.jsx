import React, { PureComponent } from 'react'
import Grid from '@material-ui/core/Grid'
import { theme } from 'core/theme'

const Windmill = ({ title, rightBlade, leftBlade, bottomHalfCircle, topHalfCircle }) => (
  <Grid
    item
    xs={12}
    sm={12}
    md={12}
    lg={12}
  >
    <Grid
      container
      direction={'column'}
      alignItems='center'
    >
    <Grid
    item
    xs={12}
    sm={6}
    md={3}
    lg={10}
    style={{
      backgroundColor: '#A7ADBA',
      boxShadow: '0px 2px 4px rgba(0,0,0,0.18)',
      borderTopLeftRadius:      topHalfCircle ?'1000px' : '0px',
      borderTopRightRadius:     topHalfCircle ?'1000px' : '0px',
      borderBottomLeftRadius:   bottomHalfCircle ? '1000px' : '0px',
      borderBottomRightRadius:  bottomHalfCircle ? '1000px' : '0px',
      marginBottom: '3em',
      height: '6em',
      width: '100%'
    }}
  >
    <Grid
      container
      direction={'column'}
      justify='center'
      alignItems='center'
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          height: '2em'
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: '1em',
            top: '-.5em',
            verticalAlign: 'middle',
            lineHeight: '2em',
            height: '2em',
            width: '2em',
            fontSize: '2em',
            color: 'white',
            backgroundColor: '#4078c0',
            zIndex: 7
          }}
        >
          <h5>
            {title}
          </h5>
        </div>
      </div>
      <div
        style={{
          position: 'relative',
          height: '2em'
        }}
      >
        <p style={{
          position: 'absolute',
          padding: '1em .25em',
          width: '9em',
          bottom: '-1em',
          left: 0,
          textAlign: 'center',
          backgroundColor: 'black',
          fontWeight: 'bold',
          fontSize: '1em',
          borderTopLeftRadius: '100px',
          borderBottomRightRadius: '100px',
          boxShadow: '0px 2px 4px rgba(0,0,0,0.18)',
          zIndex: 6
        }}>
          <a href={rightBlade.link} target='_blank'>
            {rightBlade.title}
          </a>
        </p>
      </div>
      <div style={{
        position: 'relative',
        height: '2em',
        left: '0'
      }}>
        <p style={{
          position: 'absolute',
          left: '-8em',
          bottom: '-2em',
          padding: '1em .25em',
          width: '9em',
          textAlign: 'center',
          backgroundColor: 'black',
          fontWeight: 'bold',
          fontSize: '1em',
          borderTopLeftRadius: '100px',
          borderBottomRightRadius: '100px',
          boxShadow: '0px 2px 4px rgba(0,0,0,0.18)'
        }}>
          <a href={leftBlade.link} target='_blank'>
            {leftBlade.title}
          </a>
        </p>
      </div>
    </Grid>
  </Grid>
    </Grid>
  </Grid>
)

export default class Header extends PureComponent {
  render () {
    return (
      <div style={{
        position: 'absolute',
        top: '15%',
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
              boxShadow: '0px 2px 4px rgba(0,0,0,0.18)',
              marginBottom: '2em',
              borderTopLeftRadius: '100px',
              borderBottomRightRadius: '100px'
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
                <div
                  style={{
                    height: '80px'
                  }}
                >
                  <img
                    style={{
                      position: 'relative',
                      top: '-2em',
                      left: 40,
                      zIndex: 7,
                      width: '120px',
                      borderRadius: '100px',
                      border: `2px solid ${theme.color.white.primary}`,
                      boxShadow: '0px 2px 4px rgba(0,0,0,0.28)'
                    }}
                    src='https://lh3.googleusercontent.com/-Y0KSSPzajYA/XKqmmQerRKI/AAAAAAAAAAs/6kHIvHPgrUMqcDQx_Ymod_rylpJyrvHBwCEwYBhgL/w280-h280-p/me.jpeg'
                  />
                  <div
                    style={{
                      position: 'relative',
                      top: '-9em',
                      left: 60,
                      zIndex: 6,
                      width: '120px',
                      height: '120px',
                      borderTopLeftRadius: '80px',
                      backgroundColor: '#4078c0',
                      boxShadow: '0px 2px 4px rgba(0,0,0,0.28)'
                    }}
                  />
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
            lg={3}
          >
            <Grid
              container
              direction={'column'}
            >
          <Windmill
            title={'Social'}
            leftBlade={{
              link: 'https://linkedin.com/in/philmirez',
              title: 'LinkedIn'
            }}
            rightBlade={{
              link: 'https://twitter.com/philmirez',
              title: 'Twitter'
            }}
            topHalfCircle
          />
          <Windmill
            title={'Portfolio'}
            leftBlade={{
              link: 'https://cryptwalk.com',
              title: 'CryptWalk'
            }}
            rightBlade={{
              link: 'https://github.com/philmirez',
              title: 'Github'
            }}
            bottomHalfCircle
          />
            </Grid>
          </Grid>
        </Grid>
      </div>
      </div>
    )
  }
}