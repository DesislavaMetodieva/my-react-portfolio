import React from 'react'
import './Contact.css'

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Leave Your Feedback </h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3 w-25 smallScreen">
          <label className="form-label w-25" htmlFor="name">
            Full Name
          </label>
          <input className="form-control" type="text" id="name" required placeholder="Full Name"/>
        </div>
        <div className="mb-3 w-25 smallScreen">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required placeholder="Email"/>
        </div>
        <div className="mb-3 w-50 smallScreen">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control smallScreen" id="message" rows={8} required placeholder="Enter your message"/>
        </div>
        <button className="button-custom border-0 py-2 px-6 rounded text-lg inline-flex font-semibold" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}
export default Contact