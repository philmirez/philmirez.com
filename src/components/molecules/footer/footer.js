import React from 'react'
import Grid from '@material-ui/core/Grid'
import EmailTwoTone from '@material-ui/icons/EmailTwoTone'
import MessageTwoTone from '@material-ui/icons/MessageTwoTone'
import CallMergeTwoTone from '@material-ui/icons/CallMergeTwoTone'
import { Footer, FooterRow } from './style'
import { FooterAvatar, FooterAvatarImg } from 'atoms/avatar/avatar'

export default class extends React.Component {
  render () {
    return (
      <Footer>
        <FooterRow gutter='small'>
          <FooterAvatar>
            <FooterAvatarImg
              src='https://avatars2.githubusercontent.com/u/13524654?v=3&s=460'
              alt='avatar'
            />
          </FooterAvatar>
          <Grid
            container
            className='footerBottom'
            direction='row'
            justify='flex-start'
            alignItems='flex-start'
          >
            <Grid item className='footerProfessionalTitle' xs={6}>
              <Grid
                container
                direction='row'
                justify='flex-start'
                alignItems='flex-start'
              >
                <span>Full Stack Developer </span>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Grid
                container
                direction='row'
                justify='flex-end'
                alignItems='flex-start'
              >
                <Grid item xs={4} />
                <Grid item xs={8}>
                  <Grid
                    container
                    direction='row'
                    justify='flex-end'
                    alignItems='flex-end'
                  >
                    <Grid item>
                      <a
                        href='mailto:philmirez@gmail.com?Subject=Hey%20Phil'
                        target='_top'
                      >
                        <EmailTwoTone className='email' />
                      </a>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </FooterRow>
      </Footer>
    )
  }
}
