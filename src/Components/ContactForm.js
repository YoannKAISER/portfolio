import React, { Component } from "react";
import emailjs from "emailjs-com";

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const userId = process.env.REACT_APP_EMAILJS_USER_ID;

export default class ContactForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, message } = this.state;

    const templateParams = {
      from_name: `${firstName} ${lastName}`,
      to_name: "Yoann KAISER",
      email: email,
      message: message
    };

    emailjs.send(serviceId, templateId, templateParams, userId)
      .then((response) => {
         console.log('Email sent successfully!', response.status, response.text);
         if (response.status === 200) {
          alert('Votre message a été envoyé avec succès !');
         }         
         // Réinitialisez le formulaire après l'envoi
         this.setState({
           firstName: "",
           lastName: "",
           email: "",
           message: ""
         });
      })
      .catch((error) => {
         console.log('Failed to send email:', error);
      });
  };

  render() {
    const { firstName, lastName, email, message } = this.state;
    return (
        <div style={{width:"30%"}}>
          <h3>Via le formulaire</h3>
          <form style={{position:"relative", display:"flex", flexDirection: "column", alignItems: "baseline"}} onSubmit={this.handleSubmit}>
            <label>
              Votre NOM :
            </label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
              required
            />

            <label>
              Votre Prénom :
            </label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
              required
            />

            <label>
              Votre email:
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />

            <label>
              Votre message:
            </label>
            <textarea
              name="message"
              value={message}
              onChange={this.handleChange}
              required
            ></textarea>

            <button type="submit" style={{position:"absolute", bottom:"-40px", left:"50%"}}>Envoyer</button>
          </form>
        </div>
    );
  }
}