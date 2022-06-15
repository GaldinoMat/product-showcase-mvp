import React from 'react';

import styles from './ContactForm.module.scss';

const ContactUsForm = () => {
  console.log('heelo');

  return (
    <section className={styles.contactFormContainer}>
      <div className={styles.contactFormTitleContainer}>
        <h2>Send us a message!</h2>
      </div>
      <div className={styles.contactFormUsContainer}>
        <form action="" method="post">
          <input type="text" name="" id="" placeholder="First name" />
          <input type="text" name="" id="" placeholder="Last name" />
          <input type="email" name="" id="" placeholder="E-mail" />
          <textarea name="" id="" cols={30} rows={10} placeholder="Write your message" />
          <button type="submit">
            Send message!
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsForm;
