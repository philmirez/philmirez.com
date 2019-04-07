import React from 'react';
import EmailTwoTone from '@material-ui/icons/EmailTwoTone';
import MessageTwoTone from '@material-ui/icons/MessageTwoTone';
import Grid from '@material-ui/core/Grid';
import { Card } from 'layout/style';
import Modal from 'react-rainbow-components/components/Modal';

export default class extends React.Component {
  render() {
    const { open, onCloseClick } = this.props;
    return (
      <Modal
        className="contactModal"
        isOpen={open}
        title="Contact"
        onRequestClose={onCloseClick}
      >
        <h3>ᕕ(ᐛ)ᕗ Either send me an email or message me on LinkedIn</h3>
        <a
          href="mailto:ramirezp6856@gmail.com?Subject=Hey%20Phil"
          target="_top"
        >
          <Card>
            <Grid container>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <EmailTwoTone className="modalEmail" /> Gmail
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </a>
        <a
          href="https://www.linkedin.com/in/philmirez"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Card>
            <Grid container>
              <Grid item xs={12}>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <MessageTwoTone className="modalBrandLinkedin" /> LinkedIn
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </a>
      </Modal>
    );
  }
}
