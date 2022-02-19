import React from 'react';
import emailjs from "emailjs-com";


const ContactForm = () => {
  function sendMail(mail) {
    mail.preventDefault();
    emailjs.sendForm(
      'service_dejrkea',
      'template_fszi5hs',
      mail.target,
      "user_xKtKWElI0l3SSrRoxgKbA"
    ).then(response => {
      if(response.status === 200){
        alert("E-mail enviado com sucesso em breve entrarei em contato com você");
        handleSubmit();
      }
    }).catch(err => {
      console.log(err);
    });
  }

  const handleSubmit = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    this.setState({
      itemvalues: [{}]
    });

    Array.from(document.querySelectorAll("textarea"));
    var texts = this.textarea;
    texts.value = "";
  };


  return (

    <form onSubmit={sendMail} id='contact-form'>
      Nome
      <input type='text' name='user_name' placeholder='Nome' />
      <br />
      Email
      <input type='email' name='user_email' placeholder='Email' />

      <br />
      Mensagem
      <textarea name="message" placeholder='Me conte um pouco sobre'  />

      <br />
      <input className="button" type='submit' value='ENVIAR'  />
    </form>

  );
}

export default ContactForm;