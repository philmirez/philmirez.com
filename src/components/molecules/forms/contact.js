import React from "react";
import { navigateTo } from "gatsby-link";
import Recaptcha from "react-google-recaptcha";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRecaptcha = value => {
    this.setState({ "g-recaptcha-response": value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <div>
        <h2>Feel free to contact me!</h2>
        <form
          name="contact-recaptcha"
          method="post"
          data-netlify="true"
          onSubmit={this.handleSubmit}
        >
          <noscript>
            <p>This form won’t work with Javascript disabled</p>
          </noscript>
          <p>
              <TextField
                label="Name"
                onChange={this.handleChange}
                margin="normal"
              />
          </p>
          <p>
              <TextField
                label="Email"
                type="email"
                onChange={this.handleChange}
                margin="normal"
              />
          </p>
          <p>
            <TextField
              label="Message"
              onChange={this.handleChange}
              margin="normal"
              multiline
              rowsMax="4"
            />
          </p>
          {/*<Recaptcha
            ref="recaptcha"
            sitekey={RECAPTCHA_KEY}
            onChange={this.handleRecaptcha}
          />*/}
          <p>
            <Button variant="contained" type="submit">
              Send
              {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
              <SendIcon />
            </Button>
          </p>
        </form>
      </div>
    );
  }
}
