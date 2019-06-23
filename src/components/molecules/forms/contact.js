import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'
import LinearProgress from '@material-ui/core/LinearProgress'
import useForm from 'hooks/useForm'

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;
const _getContactForm = (values, handleChange, handleSubmit) => (
  <React.Fragment>
    <h2 style={{ color: 'black', fontSize: '2em' }}>Feel free to contact me!</h2>
    <form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      <noscript>
        <p>This form won’t work with Javascript disabled</p>
      </noscript>
      <div>
        <TextField
          style={{ color: 'black', fontSize: '2em' }}
          label="Name"
          margin="normal"
          name='name'
          value={values.name || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <TextField
          label="Email"
          type="email"
          name='email'
          margin="normal"
          value={values.email || ''}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <TextField
          label="Message"
          margin="normal"
          name='message'
          multiline
          rowsMax="4"
          value={values.message || ''}
          onChange={handleChange}
          required
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
  </React.Fragment>
)

function ContactForm() {
  const [wasSuccessful, setSuccessful] = useState(false)

  const initialState = {
    name: '',
    email: '',
    message: ''
  }

  const {
    values,
    updates,
    isSubmitting,
    setIsSubmitting,
    handleChange,
    handleSubmit
  } = useForm(initialState, contactMe)

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

  async function contactMe() {
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      })
    } catch (error) {
      alert(error)
    }
    setIsSubmitting(false)
    setSuccessful(true)
  }

  console.log(values)

  return isSubmitting ? (<LinearProgress />) : (
    <div>
      {wasSuccessful ? <h2>Success!</h2>  : _getContactForm(values, handleChange, handleSubmit) }
    </div>
  )
}

export default ContactForm