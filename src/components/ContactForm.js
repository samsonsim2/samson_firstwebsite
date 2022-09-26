// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react'
import { useForm, ValidationError } from '@formspree/react'
function ContactForm() {
  const [state, handleSubmit] = useForm('xyyvebbz')
  if (state.succeeded) {
    return <p>We'll be in touch soon!</p>
  }
  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <div>
        <h3>Hit me up if you are interested in working together !</h3>
      </div>

      <div>
        <input id='name' type='name' name='name' placeholder='name' />
        <ValidationError prefix='Name' field='name' errors={state.errors} />

        <input id='email' type='email' name='email' placeholder='email' />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
        <br />
        <textarea id='message' name='message' />
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />
        <button
          className='submit-btn'
          type='submit'
          disabled={state.submitting}
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default ContactForm
