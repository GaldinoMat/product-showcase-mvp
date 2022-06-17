import Head from 'next/head';
import React from 'react';

import styles from '../../styles/Contact.module.scss';
import ContactUsForm from '../components/ContactUs/ContacUsForm';
import FormFillerText from '../components/ContactUs/FillerText';

const ContactUs = () => (
  <>
    <Head>
      <title>
        Sneakers | Contact Us
      </title>
    </Head>
    <main className={styles.contactMain}>
      <div className={styles.contactContent}>
        <FormFillerText />
        <hr className={styles.divisor} />
        <ContactUsForm />
      </div>
    </main>
  </>
);

export default ContactUs;
