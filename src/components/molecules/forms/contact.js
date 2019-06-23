import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

export default () => (
      <div>
        <h2>Feel free to contact me!</h2>
        <form
          name="contact"
          netlify
        >
          <noscript>
            <p>This form won’t work with Javascript disabled</p>
          </noscript>
          <div>
            <input type="hidden" name="form-name" value="contact" />
          </div>
          <div>
              <TextField
                label="Name"
                margin="normal"
              />
          </div>
          <div>
              <TextField
                label="Email"
                type="email"
                margin="normal"
              />
          </div>
          <div>
            <TextField
              label="Message"
              margin="normal"
              multiline
              rowsMax="4"
            />
          </div>
          {/*<Recaptcha
            ref="recaptcha"
            sitekey={RECAPTCHA_KEY}
            onChange={this.handleRecaptcha}
          />*/}
          <div>
            <Button variant="contained" type="submit">
              Send
              <SendIcon />
            </Button>
          </div>
        </form>
      </div>
)
