import React from 'react'

const Form = () => {
  return (
    <>
    <h1>
        Simple Form
    </h1>
    
    <form
  action="https://formspree.io/f/xnnjvlka"
  method="POST"
>
  <label>
    Your email:
    <input type="email" name="email" />
  </label>
  <label>
    Your message:
    <textarea name="message"></textarea>
  </label>
  {/* <!-- your other form fields go here  */}
  <button type="submit">Send</button>
</form>



    </>
  )
}

export default Form