import Head from 'next/head';
import React from 'react';

import styles from '../../styles/Contact.module.scss';
import ContactUsForm from '../components/ContactUs/ContacUsForm';
import FormFillerText from '../components/ContactUs/FillerText';

const ContactUs = () => {
  console.log('hello');

  return (
    <>
      <Head>
        <title>
          Sneakers | Contact Us
        </title>
      </Head>
      <main className={styles.contactMain}>
        <FormFillerText />
        <hr className={styles.divisor} />
        <ContactUsForm />
      </main>
    </>
  );
};

export default ContactUs;
